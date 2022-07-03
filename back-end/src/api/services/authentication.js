import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../models/db_schema.js';
import strings from '../models/strings.js';

const errorMessages = strings.errors.auth;
const successMessages = strings.success.auth;

async function registerUser(username, password) {
  try {
    const usernameExists = await User.findOne({ username });

    // If username unavailable return error
    if (usernameExists) {
      return { status: 409, payload: { message: errorMessages.username } };
    }

    // If available add on database
    const values = { username, password };
    await User.create(values);

    // Get mongoDb Id and send to controller
    const { _id: userId } = await User.findOne({ username });
    return {
      status: 201,
      payload: { message: successMessages.created, userId },
    };
  } catch (error) {
    // Set a especific database error
    return {
      status: 500,
      payload: {
        message: `${strings.errors.database.unknown}: ${error.toString()}`,
      },
    };
  }
}

async function verifyLogin(username, inputPassword) {
  try {
    const user = await User.findOne({ username });

    // Verify if user does not exist in DB
    if (!user) {
      return {
        status: 403,
        payload: { message: errorMessages.credentials },
      };
    }
    const { _id: userId, password: dbPassword, events: userEvents } = user;
    const passwordMatch = await bcrypt.compare(inputPassword, dbPassword);
    // Verify if password match with DB
    if (!passwordMatch) {
      return {
        status: 403,
        payload: { message: errorMessages.credentials },
      };
    }
    // Send user info to controller
    return {
      status: 202,
      payload: {
        message: successMessages.logged,
        data: { username, userId, userEvents },
      },
    };
  } catch (error) {
    return {
      status: 500,
      payload: {
        message: `${errorMessages.login}: ${error.toString()}`,
      },
    };
  }
}

function createToken(data) {
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

export { registerUser, verifyLogin, createToken };

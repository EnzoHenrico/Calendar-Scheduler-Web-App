import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../models/db_schema.js';
import strings from '../models/strings.js';

const errorMessages = strings.errors.auth;
const successMessages = strings.success.auth;

async function registerUser(email, username, password) {
  try {
    const emailExists = await User.findOne({ email });

    // If email unavailable return error
    if (emailExists) {
      return { status: 409, payload: { message: errorMessages.email } };
    }

    // If available add on database
    const values = { email, username, password };
    await User.create(values);

    // Get mongoDb Id and send to controller
    const { _id: userId } = await User.findOne({ email });
    return {
      status: 201,
      payload: { message: successMessages.created, userId },
    };
  } catch (error) {
    // Set a especific database error
    return {
      status: 500,
      payload: {
        error: error.toString(),
        message: strings.errors.database.create,
      },
    };
  }
}

async function verifyLogin(email, inputPassword) {
  try {
    const user = await User.findOne({ email });

    // Verify if user does not exist in DB
    if (!user) {
      return {
        status: 403,
        payload: { message: errorMessages.credentials },
      };
    }
    const { _id: userId, username, password: dbPassword, events: userEvents } = user;
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
        error: error.toString(),
        message: strings.errors.database.read,
      },
    };
  }
}

function createToken(data) {
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

export { registerUser, verifyLogin, createToken };

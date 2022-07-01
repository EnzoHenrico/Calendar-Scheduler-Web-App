import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../models/db_schema.js';

export async function registerUser(username, password) {
  try {
    const usernameExists = await User.findOne({ username });

    // If username unavailable return error
    if (usernameExists) {
      return { status: 409, payload: { message: 'Username already exists' } };
    }

    // If available add on database
    const values = { username, password };
    await User.create(values);

    // Get mongoDb Id and send to controller
    const { _id: userId } = await User.findOne({ username });
    return {
      status: 201,
      payload: { message: 'Created Successfully', userId },
    };
  } catch (error) {
    // Set a especific database error
    const logError = JSON.stringify(error);
    return {
      status: 500,
      payload: { message: 'Database Error', error: logError },
    };
  }
}

export async function verifyLogin(username, inputPassword) {
  try {
    const user = await User.findOne({ username });
    const { _id: userId, password: dbPassword, events: userEvents } = user;

    // Verify if user does not exist in DB
    if (!user) {
      return {
        status: 403,
        payload: { message: 'Username or password invalid' },
      };
    }
    const passwordMatch = await bcrypt.compare(inputPassword, dbPassword);
    // Verify if password match with DB
    if (!passwordMatch) {
      return {
        status: 403,
        payload: { message: 'Username or password invalid' },
      };
    }
    // Send user info to controller
    return {
      status: 202,
      payload: { message: 'Logged!', data: { username, userId, userEvents } },
    };
  } catch (error) {
    const logError = JSON.stringify(error);
    return {
      status: 500,
      payload: { message: 'Login Error', error: logError },
    };
  }
}

export function createToken(data) {
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
}

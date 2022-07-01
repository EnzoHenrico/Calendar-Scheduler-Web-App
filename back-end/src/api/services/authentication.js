// import express from 'express';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

import { User } from '../models/db_schema.js';

dotenv.config();

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
    return { status: 201, payload: { message: 'Created Successfully', userId } };
  } catch (error) {

    // Set a especific database error

    let logError = JSON.stringify(error);
    return { status: 500, payload: { message: 'Database Error', error: logError } };
  }
}

/*
 * Sign-in(Login) services:
 *  - Recive JSON with user input and verify if:
 *      - If username is registered on Database:
 *          - If password match registered password:
 *              - Get in user data: user Id, events Ids and set an object
 *                  - Return to controller a 202 acepted and the object
 *              - Else password is whrong:
 *                  - Return to controller a 403 forbbiden
 *      - Else user does not exist:
 *          - Return to controller a 403 forbbiden
 */
export async function verifyLogin(username, inputPassword) {
  
  try {
    const user = await User.findOne({ username });
    const { _id: userId, password: dbPassword, events: userEvents } = user;

    // Verify if user does not exist in DB
    if(!user){
      return { status: 403, payload: { message: 'Username or password invalid' } };
    }    
    const passwordMatch = await bcrypt.compare(inputPassword, dbPassword);
    // Verify if password match with DB
    if(!passwordMatch){
      return { status: 403, payload: { message: 'Username or password invalid' } };
    }
    // Send user info to controller
      return { status: 202, payload: { message: 'Logged!', userId, userEvents } };
  } catch (error) {
    let logError = JSON.stringify(error);
    return { status: 500, payload: { message: 'Login Error', error: logError } };   
  }
}
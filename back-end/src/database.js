import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// // MongoDB env's

const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;

const DB_CONNECTION = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/calendar`, console.log('Database Connected!')).catch(error => console.log('MONGODB ERROR: ', error));

export default DB_CONNECTION;

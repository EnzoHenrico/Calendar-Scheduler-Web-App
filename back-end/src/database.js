import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// MongoDB env's
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.HOST;

const DB_CONNECTION = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}`);

module.exports = { DB_CONNECTION };

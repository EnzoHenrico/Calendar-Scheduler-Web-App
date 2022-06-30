import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB env's

const { DB_PORT } = process.env;
const { DB_HOST } = process.env;

const DB_CONNECTION = mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/calendar`)
  .then(() => console.log('Database Connected!'))
  .catch((error) => console.log('MONGODB ERROR: ', error));

export default DB_CONNECTION;

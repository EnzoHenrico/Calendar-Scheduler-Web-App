import express from 'express';
import dotenv from 'dotenv';

import authentication from './api/controllers/authentication.js';
import events from './api/controllers/events.js';
import database from './database.js';

dotenv.config();

await database;

const { PORT } = process.env;

// Create Express server & instace a router
const app = express();
const router = express.Router();

// Server parse JSON payloads & set initial router
app.use(express.json());
app.use('/api/v1', router);

// Set routes
router.use('/authentication', authentication);
router.use('/events', events);

// Server initial log
app.listen(PORT, () => console.log(`server listen on localhost:${PORT}`));

//  Server Health Test
router.get('/', (req, res) => {
  res.send('Server Ok!');
});

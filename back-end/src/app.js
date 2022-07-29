import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authentication from './api/controllers/authentication.js';
import events from './api/controllers/events.js';
import user from './api/controllers/user.js'
import database from './database.js';

dotenv.config();

await database;

const { PORT } = process.env;

// Create Express server & instace a router
const app = express();
const router = express.Router();

app.use(cors({ origin: 'http://localhost:3000' }));

// Server parse JSON payloads & set initial router
app.use(express.json());
app.use('/api/v3', router);

// Set routes
router.use('/authentication', authentication);
router.use('/events', events);
router.use('/user', user);


// Server initial log
app.listen(PORT, () => console.log(`server listen on localhost:${PORT}`));

//  Server Health Test
router.get('/', (req, res) => {
  res.send('Server Ok!');
});

import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import bcrypt from 'bcrypt';

import { body, validationResult } from 'express-validator';
import { } from '../models/db_schema';
import { registerUser } from '../services/authentication';

dotenv.config();

const router = express.Router();

// Token Authorization Middleware
function authorizeToken(req, res, next) {
  console.log('middleware: ', req.headers);

  next();
}

// Recive login payload from user
router.post('/sign-in', (req, res) => {
  // Call login services to validate

  const { username, password } = req.body;

  res.status(200).json({ username, password });
});

// Recive register payload from user
router.post(
  '/sign-up',
  body('username').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    // Middleware error log
    const errors = validationResult(req);
    const { username, password, passwordConfirm } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid Payload', error: errors.array() });
    }
    if (password !== passwordConfirm) {
      return res.status(403).json({ message: 'Password dont Match' });
    }

    const response = await registerUser(username, password);

    return res.status(response.status).json(response.payload);
  },
);

router.get('/user-requests', authorizeToken, (req, res) => {
  if (!req.body) {
    res.status(403).send('Invalid Token');
  }
  res.status(200).json({ token: 'token' });
});

router.post('/login', (req, res) => {
  // Login Athorization
  let auth;

  // if logged in, create token:
  if (auth) {
    const user = { username: req.body.username };
    // Service
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, (error) => {
      if (error) {
        res.status(500).json({ message: 'Error on create JWT' });
      }
      res.status(200).json({ accessToken });
    });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

// Router tests
router.get('/auth', (req, res) => {
  res.status(200).send('Authentication route ok!');
});

router.post('/test-post', (req, res) => {
  res.status(200).send(`Recived Data:<br>${JSON.stringify(req.body)}`);
});

export default router;

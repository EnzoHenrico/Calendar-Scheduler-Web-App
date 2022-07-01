import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

import { } from '../models/db_schema.js';
import { registerUser, verifyLogin } from '../services/authentication.js';
import { authorizeToken } from '../middlewares/authentication.js';

dotenv.config();

const router = express.Router();
const SALT = process.env.SALT_ROUNDS

// Register router (/sign-up)
router.post(
  '/sign-up',
  body('username').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    // Middleware error log
    const errors = validationResult(req);
    const { username, password, passwordConfirm } = req.body;
    const salt = 10;

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid Payload', error: errors.array() });
    }
    if (password !== passwordConfirm) {
      return res.status(403).json({ message: 'Password dont Match' });
    }
    const hash = bcrypt.hashSync(password, salt);
    const response = await registerUser(username, hash);

    return res.status(response.status).json(response.payload);
  },
);

// Login router (/sign-in)
router.post(
  '/sign-in',
  body('username').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 6 }),
  async (req, res) => {

    const errors = validationResult(req);
    const { username, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(403).json({ message: 'Username or password invalid format', error: errors.array() });
    }
    const response = await verifyLogin(username, password);

    res.status(response.status).json(response.payload);
});

// Token Validation router (/user)
router.get(
  '/user', 
  authorizeToken, 
  (req, res) => {
  if (!req.body) {
    res.status(403).send('Invalid Token');
  }
    res.status(200).json({ token: 'token' });
});

// Router tests
router.get('/auth', 
(req, res) => {
  res.status(200).send('Authentication route ok!');
});

router.post('/test-post', 
(req, res) => {
  res.status(200).send(`Recived Data:<br>${JSON.stringify(req.body)}`);
});

router.post('/login', 
  async (req, res) => {
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

export default router;

import express from 'express';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

import strings from '../models/strings.js';
import {
  registerUser,
  verifyLogin,
  createToken,
} from '../services/authentication.js';

const router = express.Router();
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
const messages = strings.errors.auth;

// Register router (/sign-up)
router.post('/sign-up',
  body('email').isEmail(),
  body('username').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    // Middleware error log
    const errors = validationResult(req);
    const { email, username, password, passwordConfirm } = req.body;

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: messages.input, error: errors.array() });
    }
    if (password !== passwordConfirm) {
      return res.status(403).json({ message: messages.matchKey });
    }
    const hash = bcrypt.hashSync(password, saltRounds);
    const response = await registerUser(email, username, hash);

    return res.status(response.status).json(response.payload);
  },
);

// Login router (/sign-in)
router.post('/sign-in',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(403).json({
        message: messages.input,
        error: errors.array(),
      });
    }

    try {
      const serviceResult = await verifyLogin(email, password);
      if (serviceResult.status === 202) {
        serviceResult.payload.token = createToken(serviceResult.payload.data);
      }
      return res.status(serviceResult.status).json(serviceResult.payload);
    } catch (error) {
      return res
        .status(400)
        .json({ error: `${messages.token}: ${error.toString()}` });
    }
  },
);

export default router;

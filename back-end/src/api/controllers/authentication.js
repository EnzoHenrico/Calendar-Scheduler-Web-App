import express from 'express';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

import {} from '../models/db_schema.js';
import {
  registerUser,
  verifyLogin,
  createToken,
} from '../services/authentication.js';
import authorizeToken from '../middlewares/authentication.js';

const router = express.Router();
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

// Register router (/sign-up)
router.post(
  '/sign-up',
  body('username').isLength({ min: 4, max: 16 }),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    // Middleware error log
    const errors = validationResult(req);
    const { username, password, passwordConfirm } = req.body;

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: 'Invalid Payload', error: errors.array() });
    }
    if (password !== passwordConfirm) {
      return res.status(403).json({ message: 'Password dont Match' });
    }
    const hash = bcrypt.hashSync(password, saltRounds);
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
      return res.status(403).json({
        message: 'Username or password invalid format',
        error: errors.array(),
      });
    }

    try {
      const verifyData = await verifyLogin(username, password);
      verifyData.payload.token = createToken(verifyData.payload.data);
      return res.status(verifyData.status).json(verifyData.payload);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },
);

// Validate token in header
router.get('/user', authorizeToken, (req, res) => {
  res.send('Autenticado');
});

// Router tests
router.get('/auth', (req, res) => {
  res.status(200).send('Authentication route ok!');
});

router.post('/test-post', (req, res) => {
  res.status(200).send(`Recived Data:<br>${JSON.stringify(req.body)}`);
});

export default router;

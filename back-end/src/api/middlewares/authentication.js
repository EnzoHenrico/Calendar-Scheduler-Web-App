import jwt from 'jsonwebtoken';

import { User } from '../models/db_schema.js';
import strings from '../models/strings.js';

// Token Authorization Middleware
async function authorizeToken(req, res, next) {
  const headerData = req.headers.authorization;
  const token = headerData && headerData.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: strings.errors.auth.foundToken });
  }

  try {
    const tokenData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findOne({ _id: tokenData.userId });
  } catch (error) {
    res
      .status(401)
      .json({ message: strings.errors.database.read, error: error.toString() });
  }

  next();
}

export default authorizeToken;

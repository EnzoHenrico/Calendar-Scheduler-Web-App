import jwt from 'jsonwebtoken';

// Token Authorization Middleware
function authorizeToken(req, res, next) {
  const headerData = req.headers.authorization;
  const token = headerData && headerData.split(' ')[1];

  if (!token) {
    res.status(500).json({ message: 'no token' });
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }

  next();
}

export default authorizeToken;

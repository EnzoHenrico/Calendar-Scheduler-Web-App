import express from 'express';

// Token Authorization Middleware
export function authorizeToken(req, res, next) {
  console.log('middleware: ', req.headers);

  next();
}
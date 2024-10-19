import jwt from 'jsonwebtoken';

import logError from '../utils/logError.js';

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        error: 'No token provided! Access denied!',
      });
    }

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (error, payload) => {
        if (error && error.name === 'TokenExpiredError') {
          return res.status(401).json({
            error: 'Token expired!',
          });
        } else if (error && error.name === 'JsonWebTokenError') {
          return res.status(401).json({
            error: 'Invalid Token!',
          });
        } else if (error) {
          return res.status(401).json({
            error: 'Authentication error!',
          });
        }

        req.userId = payload;

        next();
      }
    );
  } catch (error) {
    logError(error, res);
  }
};

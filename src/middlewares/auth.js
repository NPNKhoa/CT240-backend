import jwt from 'jsonwebtoken';

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
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
      error,
    });
  }
};

import { UserProjectDAO } from '../data/UserProjectDAO.js';

export const isProjectOwner = async (req, res, next) => {
  const { id: userId } = req.userId;
  const { id: projectId } = req.params;

  try {
    const userProject = await UserProjectDAO.findUserRole(userId, projectId);

    if (!userProject || userProject.userRole !== 'owner') {
      return res
        .status(403)
        .json({ message: 'You are not the project owner!' });
    }

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Authorization failed', error: error.message });
  }
};

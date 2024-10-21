import { UserDAO } from '../data/UserDAO.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
  ConflictError,
  CredentialsError,
  NotFoundError,
} from '../utils/Error.js';

class AuthService {
  static async register(userData) {
    const { username, password, email, fullName } = userData;

    const existingUsername = await UserDAO.findUserByUsername(username);

    if (existingUsername) {
      throw new ConflictError('Username already exists');
    }

    const existingEmail = await UserDAO.findUserByEmail(email);

    if (existingEmail) {
      throw new ConflictError('Email already exists');
    }

    const salt = await bcrypt.hash(password, 10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return await UserDAO.createUser({
      username,
      email,
      password: hashedPassword,
      fullName,
    });
  }

  static async login(username, password) {
    const user = await UserDAO.findUserByUsername(username);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new CredentialsError('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1d',
    });

    return token;
  }
}

export default AuthService;

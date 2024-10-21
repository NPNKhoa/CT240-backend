import UserDAO from '../daos/userDAO';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthService {
  static async register(userData) {
    const { email, password, fullName } = userData;

    const existingUser = await UserDAO.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await UserDAO.createUser({
      email,
      password: hashedPassword,
      fullName,
    });
  }

  static async login(email, password) {
    const user = await UserDAO.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return token;
  }
}

export default AuthService;

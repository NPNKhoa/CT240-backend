import { UserDAO } from '../data/UserDAO.js';
import bcrypt from 'bcrypt';

import { NotFoundError, ValidationError } from '../utils/Error.js';

export class UserService {
  static async getAllUsers() {
    const users = await UserDAO.getAllUsers();

    if (users === null || (Array.isArray(users) && users.length === 0)) {
      throw new NotFoundError('Users not found');
    }

    return users;
  }

  static async getUserById(userId) {
    const user = await UserDAO.findUserById(userId);

    if (user == null) {
      throw new NotFoundError('User not found');
    }

    return user;
  }

  static async createUser(userData) {
    const existingEmail = await UserDAO.findUserByEmail(userData.email);

    if (existingEmail) {
      throw new ConflictError('Email is already exist');
    }

    const existingUsername = await UserDAO.findUserByEmail(userData.username);

    if (existingUsername) {
      throw new ConflictError('Email is already exist');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
      ...userData,
      password: hashedPassword,
    };

    return await UserDAO.createUser(newUser);
  }

  static async updateUser(userId, updateData) {
    const existingUser = await UserDAO.findUserById(userId);

    if (!existingUser) {
      throw new ValidationError();
    }

    return await UserDAO.updateUser(userId, updateData);
  }

  static async deleteUser(userId) {
    const existingUser = await UserDAO.findUserById(userId);

    if (!existingUser) {
      throw new ValidationError();
    }

    return await UserDAO.deleteUser(userId);
  }
}

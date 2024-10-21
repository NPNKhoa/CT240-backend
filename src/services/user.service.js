import { UserDAO } from '../data/UserDAO.js';
import bcrypt from 'bcrypt';

export class UserService {
  static async getAllUsers() {
    const users = await UserDAO.getAllUsers();

    if (users === null || (Array.isArray(users) && users.length === 0)) {
      throw new NotFoundError('User not found');
    }

    return users;
  }

  static async getUserById(userId) {
    return await UserDAO.findUserById(userId);
  }

  static async createUser(userData) {
    const existingUser = await UserDAO.findUserByEmail(userData.email);

    if (existingUser) {
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
    return await UserDAO.updateUser(userId, updateData);
  }

  static async deleteUser(userId) {
    return await UserDAO.deleteUser(userId);
  }
}

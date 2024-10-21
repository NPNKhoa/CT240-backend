import { User } from '../models/User.js';

export class UserDAO {
  static async getAllUsers() {
    return await User.find();
  }

  static async findUserById(userId) {
    return await User.findById(userId);
  }

  static async findUserByEmail(email) {
    return await User.findOne({ email });
  }

  static async findUserByUsername(username) {
    return await User.findOne({ username });
  }

  static async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  static async updateUser(userId, updateData) {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  static async deleteUser(userId) {
    return await User.findByIdAndDelete(userId);
  }
}

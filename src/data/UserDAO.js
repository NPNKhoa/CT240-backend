import User from '../models/User.js';
class UserDAO {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getUsers() {
    return await User.find();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  // Another methods
}

export default new UserDAO();

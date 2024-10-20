import UserDAO from '../data/UserDAO.js';

class UserService {
  async createUser(userData) {
    // Add any business logic if needed
    return await UserDAO.createUser(userData);
  }

  async getUser(userId) {
    return await userDAO.getUserById(userId);
  }

  // More methods...
}

export default new UserService();

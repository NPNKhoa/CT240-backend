import userService from '../services/user.service.js';
import { handleError } from '../utils/handleError.js';

class UserController {
  async createUser(req, res) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      handleError(res, error);
    }
  }

  async getUser(req, res) {
    try {
      const user = await userService.getUser(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      handleError(res, error);
    }
  }

  // More methods...
}

export default new UserController();

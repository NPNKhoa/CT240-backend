import { UserService } from '../services/user.service.js';
import { handleError } from '../utils/handleError.js';
import { userUpdateSchema, userIdSchema } from '../validators/userValidator.js';

export class UserController {
  static async getAllUsers(_, res) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getUserById(req, res) {
    const { error } = userIdSchema.validate(req.params.id);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const user = await UserService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async updateUser(req, res) {
    const { error: idError } = userIdSchema.validate(req.params.id);

    if (idError) {
      return res.status(400).json({ message: idError.details[0].message });
    }

    const { error: bodyError } = userUpdateSchema.validate(req.body);

    if (bodyError) {
      return res.status(400).json({ message: bodyError.details[0].message });
    }

    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async deleteUser(req, res) {
    const { error } = userIdSchema.validate(req.params.id);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      await UserService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      handleError(error, res);
    }
  }
}

import AuthService from '../services/auth.service.js';
import { userValidator } from '../validators/userValidator.js';
import { handleError } from '../utils/handleError.js';

class AuthController {
  static async register(req, res) {
    const { error } = userValidator.validate(req.body);

    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newUser = await AuthService.register(req.body);

      res.status(201).json({
        data: newUser,
      });
    } catch (err) {
      handleError(err, res);
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      const token = await AuthService.login(username, password);

      res.status(200).json({ token });
    } catch (err) {
      handleError(err, res);
    }
  }
}

export default AuthController;

import AuthService from '../services/authService';
import { authSchema } from '../validators/authValidator';

class AuthController {
  static async register(req, res) {
    const { error } = authSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newUser = await AuthService.register(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);
      res.json({ token });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

export default AuthController;

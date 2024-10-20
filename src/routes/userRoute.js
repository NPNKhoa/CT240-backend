import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUser);

export default router;

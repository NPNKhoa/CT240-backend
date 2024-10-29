import express from 'express';
import { ProjectController } from '../controllers/ProjectController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', auth, ProjectController.createProject);

router.get('/:id', ProjectController.getProjectById);

router.get('/', ProjectController.getAllProjects);

router.put('/:id', auth, ProjectController.updateProject);

router.delete('/:id', auth, ProjectController.deleteProject);

export default router;

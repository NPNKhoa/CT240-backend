import express from 'express';
import { ProjectController } from '../controllers/ProjectController.js';
import { auth, isProjectOwner } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', auth, isProjectOwner, ProjectController.createProject);

router.get('/:id', ProjectController.getProjectById);

router.get('/', ProjectController.getAllProjects);

router.put('/:id', auth, isProjectOwner, ProjectController.updateProject);

router.delete('/:id', auth, isProjectOwner, ProjectController.deleteProject);

export default router;

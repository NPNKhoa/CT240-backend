import express from 'express';
import { auth, isProjectOwner } from '../middlewares/auth.js';
import { ProjectTypesController } from '../controllers/ProjectTypeController.js';

const router = express.Router();

router.post('/', auth, ProjectTypesController.createProjectType);

router.get('/', ProjectTypesController.getAllProjectTypes);

router.get('/:id', ProjectTypesController.getProjectTypeById);

router.put('/:id', auth, ProjectTypesController.updateProjectType);

router.delete('/:id', auth, ProjectTypesController.deleteProjectType);

export default router;

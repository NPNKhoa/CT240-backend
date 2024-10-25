import express from 'express';
import { UserProjectController } from '../controllers/UserProjectController.js';

const router = express.Router();

router.get('/', UserProjectController.getAllUserProjects);

router.get('/projects/:id', UserProjectController.getProjectByUser);

router.get('/users/:id', UserProjectController.getUsersInProject);

router.get('/:id', UserProjectController.getUserProjectById);

router.post('/', UserProjectController.createUserProject);

router.delete('/:id', UserProjectController.deleteUserProject);

export default router;

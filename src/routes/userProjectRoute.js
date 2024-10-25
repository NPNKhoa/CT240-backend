import express from 'express';
import { UserProjectController } from '../controllers/UserProjectController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', UserProjectController.getAllUserProjects);

router.get('/my-projects', auth, UserProjectController.getOwnProjects);

router.get('/projects/:userId', UserProjectController.getProjectByUser);

router.get('/users/:projectId', UserProjectController.getUsersInProject);

router.get('/:id', UserProjectController.getUserProjectById);

router.post('/', UserProjectController.createUserProject);

router.delete('/:id', UserProjectController.deleteUserProject);

export default router;

import express from 'express';
import { UserProjectController } from '../controllers/UserProjectController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', UserProjectController.getAllUserProjects);

router.get('/own', auth, UserProjectController.getOwnProjects);

router.get('/join', auth, UserProjectController.getJoinedInProjects);

router.get('/projects/:userId', UserProjectController.getProjectByUser);

router.get('/users/:projectId', UserProjectController.getUsersInProject);

router.get('/:id', UserProjectController.getUserProjectById);

router.post('/', UserProjectController.createUserProject);

router.delete('/:id', UserProjectController.deleteUserProject);

router.delete(
  '/:userId/:projectId',
  UserProjectController.removeUserFromProject
);

export default router;

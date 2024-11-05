import express from 'express';
import { ResponseController } from '../controllers/ResponseController.js';
import upload from '../configs/multerConfig.js';
import { auth, isProjectOwner } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', ResponseController.getAllResponses);

router.get('/:id', ResponseController.getResponseWithQuery); // :id is the projectId

router.get('/:id', auth, ResponseController.getResponseById);

router.post(
  '/',
  auth,
  upload.array('files', 10),
  ResponseController.createResponse
);

// router.put(
//   '/:id',
//   upload.array('files', 10),
//   ResponseController.updateResponse
// );

router.delete('/:id', auth, isProjectOwner, ResponseController.deleteResponse);

export default router;

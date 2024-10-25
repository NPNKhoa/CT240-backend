import express from 'express';
import { ResponseController } from '../controllers/ResponseController.js';
import upload from '../config/multerConfig.js';

const router = express.Router();

router.get('/', ResponseController.getAllResponses);

router.get('/:id', ResponseController.getResponseById);

router.post('/', upload.array('files', 10), ResponseController.createResponse);

router.put(
  '/:id',
  upload.array('files', 10),
  ResponseController.updateResponse
);

router.delete('/:id', ResponseController.deleteResponse);

export default router;

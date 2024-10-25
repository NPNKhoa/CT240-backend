import express from 'express';
import { FileController } from '../controllers/FileController.js';
import upload from '../configs/multerConfig.js';

const router = express.Router();

router.post('/upload', upload.array('files', 10), FileController.uploadFile);

router.get('/', FileController.getAllFiles);

router.get('/:id', FileController.getFileById);

router.delete('/:id', FileController.deleteFile);

export default router;

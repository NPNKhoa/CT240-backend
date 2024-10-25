import express from 'express';
import { SampleController } from '../controllers/SampleController.js';

const router = express.Router();

router.get('/', SampleController.getAllSamples);

router.get('/:id', SampleController.getSampleById);

router.post('/', SampleController.createSample);

router.put('/:id', SampleController.updateSample);

router.delete('/:id', SampleController.deleteSample);

export default router;

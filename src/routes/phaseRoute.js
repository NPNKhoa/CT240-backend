import express from 'express';

import { PhaseController } from '../controllers/PhaseController.js';
const router = express.Router();

router.post('/',PhaseController.createPhase);

router.get('/', PhaseController.getAllPhase);

router.get('/:id', PhaseController.getPhasebyName);

router.put('/:id', PhaseController.updatePhase);

router.delete('/:id', PhaseController.deletePhase);

export default router;

import express from 'express';
import { PhaseController } from '../controllers/PhaseController.js';
import { auth, isProjectOwner } from '../middlewares/auth.js';

const router = express.Router();

router.post('/:id', auth, isProjectOwner, PhaseController.createPhase);

router.get('/', auth, PhaseController.getAllPhase);

router.get('/:phaseName', auth, PhaseController.getPhasebyName);

router.put('/:id', auth, isProjectOwner, PhaseController.updatePhase);

router.delete('/:id', auth, PhaseController.deletePhase);

export default router;

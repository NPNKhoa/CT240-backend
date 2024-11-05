import express from 'express';
import { PhaseController } from '../controllers/PhaseController.js';
import { auth,isProjectOwner } from '../middlewares/auth.js';

const router = express.Router();

router.post('/',auth,isProjectOwner,PhaseController.createPhase);

router.get('/',auth, PhaseController.getAllPhase);

router.get('/:phaseName',auth, PhaseController.getPhasebyName);

router.put('/:id',auth,isProjectOwner, PhaseController.updatePhase);

router.delete('/:id',auth,isProjectOwner, PhaseController.deletePhase);

export default router;

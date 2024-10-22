import express from 'express';

import {ProjectTypesController } from '../controllers/ProjectTypeController.js';

const router = express.Router();

router.post('/',ProjectTypesController.createProjectType);

router.get('/', ProjectTypesController.getAllProjectTypes);

router.get('/:id', ProjectTypesController.getProjectTypeById);

router.put('/:id', ProjectTypesController.updateProjectType);

router.delete('/:id', ProjectTypesController.deleteProjectType);

export default router;

import express from 'express';

import { QuestionController } from '../controllers/QuestionController.js';
const router = express.Router();

router.post('/',QuestionController.createQuestion);

router.get('/', QuestionController.getAllQuestions);

router.get('/:id', QuestionController.getQuestionById);

router.put('/:id', QuestionController.updateQuestion);

router.delete('/:id', QuestionController.deleteQuestion);

export default router;

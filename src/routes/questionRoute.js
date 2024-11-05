import express from 'express';
import { QuestionController } from '../controllers/QuestionController.js';
import { auth, isProjectOwner } from '../middlewares/auth.js';

const router = express.Router();

router.post('/:id', auth, isProjectOwner, QuestionController.createQuestion);

router.get('/', auth, QuestionController.getAllQuestions);

router.get('/:id', auth, QuestionController.getQuestionById);

router.put('/:id', auth, isProjectOwner, QuestionController.updateQuestion);

router.delete('/:id', auth, isProjectOwner, QuestionController.deleteQuestion);

export default router;

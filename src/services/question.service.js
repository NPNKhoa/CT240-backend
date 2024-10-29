import { QuestionDAO } from '../data/QuestionDAO.js';
import { NotFoundError, ValidationError } from '../utils/Error.js';
import { questionValidator } from '../validators/questionValidator.js';

export class QuestionService {
    static async getAllQuestions() {
        const questions = await QuestionDAO.getAllQuestions();
        if (questions === null || (Array.isArray(questions) && questions.length === 0)) {
            throw new NotFoundError('Questions not found');
        }

        return questions;
    }

    static async getQuestionById(questionId) {
        const question = await QuestionDAO.findQuestionById(questionId);
        if (!question) {
            throw new NotFoundError('Question not found');
        }
        return question;
    }

    static async createQuestion(questionData) {
        // Validate question data
        const { error } = questionValidator.validate(questionData);
        if (error) {
            throw new ValidationError(error.details[0].message);
        }

        // Create new question
        return await QuestionDAO.createQuestion(questionData);
    }

    static async updateQuestion(questionId, questionData) {
        // Check if question exists
        const existingQuestion = await QuestionDAO.findQuestionById(questionId);
        if (!existingQuestion) {
            throw new NotFoundError('Question not found for updating');
        }

        // Validate updated data
        const { error } = questionValidator.validate(questionData);
        if (error) {
            throw new ValidationError(error.details[0].message);
        }

        // Update question
        return await QuestionDAO.updateQuestion(questionId, questionData);
    }

    static async deleteQuestion(questionId) {
        // Check if question exists
        const deletedQuestion = await QuestionDAO.deleteQuestion(questionId);
        if (!deletedQuestion) {
            throw new NotFoundError('Question not found for deletion');
        }

        return deletedQuestion;
    }
}

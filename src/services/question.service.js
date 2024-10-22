import { QuestionDAO } from '../data/QuestionDAO.js';

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
        const newQuestion = {
            ...questionData,
        };
        return await QuestionDAO.createQuestion(newQuestion);
    }

    static async updateQuestion(questionId, questionData) {
        const updatedQuestion = await QuestionDAO.updateQuestion(questionId, questionData);
        if (!updatedQuestion) {
            throw new NotFoundError('Question not found for updating');
        }
        return updatedQuestion;
    }

    static async deleteQuestion(questionId) {
        const deletedQuestion = await QuestionDAO.deleteQuestion(questionId);
        if (!deletedQuestion) {
            throw new NotFoundError('Question not found for deletion');
        }
        return deletedQuestion;
    }
}

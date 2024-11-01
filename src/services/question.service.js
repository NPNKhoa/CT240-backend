import { QuestionDAO } from '../data/QuestionDAO.js';
import { NotFoundError, ValidationError } from '../utils/Error.js';
import { questionValidator } from '../validators/questionValidator.js';

export class QuestionService {
  static async getAllQuestions() {
    const questions = await QuestionDAO.getAllQuestions();
    if (
      questions === null ||
      (Array.isArray(questions) && questions.length === 0)
    ) {
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
    const { error } = questionValidator.validate(questionData);

    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    const question = await QuestionDAO.createQuestion(questionData);

    if (sampleId) {
      await SampleService.addQuestion(sampleId, question._id);
    }

    return question;
  }

  static async updateQuestion(questionId, questionData) {
    const existingQuestion = await QuestionDAO.findQuestionById(questionId);
    if (!existingQuestion) {
      throw new NotFoundError('Question not found for updating');
    }

    const { error } = questionValidator.validate(questionData);
    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    return await QuestionDAO.updateQuestion(questionId, questionData);
  }

  static async deleteQuestion(questionId) {
    const deletedQuestion = await QuestionDAO.deleteQuestion(questionId);
    if (!deletedQuestion) {
      throw new NotFoundError('Question not found for deletion');
    }

    return deletedQuestion;
  }
}

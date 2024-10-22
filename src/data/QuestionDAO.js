import { Question } from '../models/Question.js';

export class QuestionDAO {
  static async getAllQuestions() {
    return await Question.find();
  }

  static async findQuestionById(questionId) {
    return await Question.findById(questionId);
  }


  static async createQuestion(questionData) {
    const question = new Question(questionData);
    return await question.save();
  }

  static async updateQuestion(questionId, questionData) {
    return await Question.findByIdAndUpdate(questionId, questionData, { new: true });
  }

  static async deleteQuestion(questionId) {
    return await Question.findByIdAndDelete(questionId);
  }
}

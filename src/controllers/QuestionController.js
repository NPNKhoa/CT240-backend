import { QuestionService } from '../services/question.service.js';
import { SampleService } from '../services/sample.service.js';

export class QuestionController {
  static async getAllQuestions(_, res) {
    try {
      const questions = await QuestionService.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getQuestionById(req, res) {
    try {
      const question = await QuestionService.getQuestionById(req.params.id);
      if (!question) {
        return res.status(404).json({ message: 'Question not found' });
      }
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createQuestion(req, res) {
    const { error } = QuestionService.createQuestion(req.body);

    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newQuestion = await QuestionService.createQuestion(req.body);

      res.status(201).json(newQuestion);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async updateQuestion(req, res) {
    try {
      const updatedQuestion = await QuestionService.updateQuestion(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedQuestion);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteQuestion(req, res) {
    try {
      await QuestionService.deleteQuestion(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

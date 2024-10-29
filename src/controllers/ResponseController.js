import { ResponseService } from '../services/response.service.js';
import { responseValidator } from '../validators/responseValidator.js';
import { handleError } from '../utils/handleError.js';

export class ResponseController {
  static async createResponse(req, res) {
    const { error } = responseValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const files = req?.files?.map((file) => file.filename);
      const responseData = { ...req.body, files };

      const newResponse = await ResponseService.createResponse(responseData);
      res.status(201).json(newResponse);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getAllResponses(_, res) {
    try {
      const responses = await ResponseService.getAllResponses();
      res.status(200).json(responses);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getResponseById(req, res) {
    try {
      const response = await ResponseService.getResponseById(req.params.id);
      res.status(200).json(response);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async updateResponse(req, res) {
    try {
      const files = req.files.map((file) => file.filename);
      const updateData = { ...req.body, files };

      const updatedResponse = await ResponseService.updateResponse(
        req.params.id,
        updateData
      );
      res.status(200).json(updatedResponse);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async deleteResponse(req, res) {
    try {
      await ResponseService.deleteResponse(req.params.id);
      res.status(204).send();
    } catch (error) {
      handleError(error, res);
    }
  }
}

import { ResponseDAO } from '../data/ResponseDAO.js';
import { NotFoundError } from '../utils/Error.js';

export class ResponseService {
  static async createResponse(responseData) {
    const newResponse = await ResponseDAO.createResponse(responseData);
    return newResponse;
  }

  static async getAllResponses() {
    const responses = await ResponseDAO.getAllResponses();

    if (!responses || responses.length === 0) {
      throw new NotFoundError('No responses found');
    }

    return responses;
  }

  static async getResponseById(responseId) {
    const response = await ResponseDAO.getResponseById(responseId);

    if (!response) {
      throw new NotFoundError('Response not found');
    }

    return response;
  }

  static async updateResponse(responseId, updateData) {
    const response = await ResponseDAO.getResponseById(responseId);

    if (!response) {
      throw new NotFoundError('Response not found');
    }

    const updatedResponse = await ResponseDAO.updateResponse(
      responseId,
      updateData
    );
    return updatedResponse;
  }

  static async deleteResponse(responseId) {
    const response = await ResponseDAO.getResponseById(responseId);

    if (!response) {
      throw new NotFoundError('Response not found');
    }

    await ResponseDAO.deleteResponse(responseId);
    return;
  }
}

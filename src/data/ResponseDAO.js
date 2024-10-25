import { Response } from '../models/Response.js';

export class ResponseDAO {
  static async createResponse(responseData) {
    const response = new Response(responseData);
    return await response.save();
  }

  static async getAllResponses() {
    return await Response.find()
      .populate('fileId questionId')
      .populate({
        path: 'userId',
        model: 'User',
        select: '-password',
      })
      .exec();
  }

  static async getResponseById(responseId) {
    return await Response.findById(responseId)
      .populate('fileId questionId')
      .populate({
        path: 'userId',
        model: 'User',
        select: '-password',
      })
      .exec();
  }

  static async updateResponse(responseId, updateData) {
    return await Response.findByIdAndUpdate(responseId, updateData, {
      new: true,
    });
  }

  static async deleteResponse(responseId) {
    return await Response.findByIdAndDelete(responseId);
  }
}

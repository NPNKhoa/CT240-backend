import { SampleDAO } from '../data/SampleDAO.js';
import { NotFoundError, ConflictError } from '../utils/Error.js';

export class SampleService {
  static async getAllSamples() {
    const samples = await SampleDAO.getAllSamples();
    if (!samples || samples.length === 0) {
      throw new NotFoundError('Samples not found');
    }
    return samples;
  }

  static async getSampleById(id) {
    const sample = await SampleDAO.getSampleById(id);
    if (!sample) {
      throw new NotFoundError('Sample not found');
    }
    return sample;
  }

  static async createSample(data) {
    return await SampleDAO.createSample(data);
  }

  static async updateSample(id, updateData) {
    const sample = await SampleDAO.getSampleById(id);
    if (!sample) {
      throw new NotFoundError('Sample not found');
    }
    return await SampleDAO.updateSample(id, updateData);
  }

  static async deleteSample(id) {
    const sample = await SampleDAO.getSampleById(id);
    if (!sample) {
      throw new NotFoundError('Sample not found');
    }
    return await SampleDAO.deleteSample(id);
  }

  static async addQuestion(sampleId, questionId) {
    const sample = await SampleDAO.getSampleById(sampleId);

    if (!sample) {
      throw new NotFoundError('Sample not found');
    }

    return await SampleDAO.addQuestion(sampleId, questionId);
  }
}

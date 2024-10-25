import { Sample } from '../models/Sample.js';

export class SampleDAO {
  static async getAllSamples() {
    return await Sample.find().populate('phaseId');
  }

  static async getSampleById(id) {
    return await Sample.findById(id).populate('phaseId');
  }

  static async createSample(data) {
    const sample = new Sample(data);
    return await sample.save();
  }

  static async updateSample(id, updateData) {
    return await Sample.findByIdAndUpdate(id, updateData, { new: true });
  }

  static async deleteSample(id) {
    return await Sample.findByIdAndDelete(id);
  }
}

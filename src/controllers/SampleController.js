import { SampleService } from '../services/sample.service.js';
import { handleError } from '../utils/handleError.js';
import { sampleValidator } from '../validators/sampleValidator.js';

export class SampleController {
  static async getAllSamples(_, res) {
    try {
      const samples = await SampleService.getAllSamples();
      res.status(200).json(samples);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getSampleById(req, res) {
    try {
      const sample = await SampleService.getSampleById(req.params.id);
      if (!sample) {
        return res.status(404).json({ message: 'Sample not found' });
      }
      res.status(200).json(sample);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async createSample(req, res) {
    const { error } = sampleValidator.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    try {
      const newSample = await SampleService.createSample(req.body);
      res.status(201).json(newSample);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async updateSample(req, res) {
    try {
      const updatedSample = await SampleService.updateSample(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedSample);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async deleteSample(req, res) {
    try {
      await SampleService.deleteSample(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      handleError(error, res);
    }
  }
}

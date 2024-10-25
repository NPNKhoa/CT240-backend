import {PhaseService } from '../services/phase.service.js';
import { handleError } from '../utils/handleError.js';
export class PhaseController {
  static async getAllPhase(_, res) {
    try {
      const phase = await PhaseService.getAllPhase();
      res.status(200).json(phase);
    } catch (error) {
      handleError(error,res);
    }
  }

  static async getPhasebyName(req, res) {
    try {
      const phase = await PhaseService.getPhaseByName(req.params.phaseName);
            if (!phase) {
        return res.status(404).json({ message: 'Phase not found' });
      }
      res.status(200).json(phase);
    } catch (error) {
      handleError(error,res);
    }
  }

  static async createPhase(req, res) {
    const {error} = PhaseService.createPhase(req.body);
    if(error){
        console.log(error);
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newPhase = await PhaseService.createPhase(req.body);
      res.status(201).json(newPhase);
    } catch (error) {
      handleError(error,res);
    }
  }

  static async updatePhase(req, res) {
    try {
      const phase = await PhaseService.updatePhase(req.params.id, req.body);
      res.status(200).json(phase);
    } catch (error) {
      handleError(error,res);
    }
  }

  static async deletePhase(req, res) {
    try {
      await PhaseService.deletePhase(req.params.id);
      res.status(204).send();
    } catch (error) {
      handleError(error,res);
    }
  }
}

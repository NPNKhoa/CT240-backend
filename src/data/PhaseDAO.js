
import { Phase } from '../models/Phase.js';
export class PhaseDAO {
  static async getAllPhase() {
    return await Phase.find();
  }

  static async findPhaseByName(phaseName) {
    return await Phase.findPhaseByName(phaseName);
  }

  static async createPhase(phaseData) {
    const phase = new Phase(phaseData);
    return await phase.save();
  }

  static async updatePhase(phaseId, phaseData) {
    return await Phase.findPhaseByIdandUpdate(phaseId, phaseData, { new: true });
  }

  static async deletePhase(phaseId){
    return await Phase.findByIdAndDelete(phaseId);
  }
  
}

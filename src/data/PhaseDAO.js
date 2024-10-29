
import { Phase } from '../models/Phase.js';
export class PhaseDAO {
  static async getAllPhase() {
    return await Phase.find();
  }

  static async getPhaseByName(phaseName) {
    return await Phase.findOne({phaseName });;
  }

  static async createPhase(phaseData) {
    const phase = new Phase(phaseData);
    return await phase.save();
  }

  static async updatePhase(phaseId, phaseData) {
        return await Phase.findByIdAndUpdate(phaseId, phaseData, { new: true });
  }

  static async deletePhase(phaseId){
    return await Phase.findByIdAndDelete(phaseId);
  }
  
}

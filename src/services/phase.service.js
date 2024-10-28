import { PhaseDAO } from '../data/PhaseDAO.js';
import { NotFoundError, ValidationError } from '../utils/Error.js';
import { phaseValidator } from '../validators/phaseValidator.js';

export class PhaseService {
  static async getAllPhases() {
    const phases = await PhaseDAO.getAllPhase();

    if (phases === null || (Array.isArray(phases) && phases.length === 0)) {
      throw new NotFoundError('Phases not found');
    }

    return phases;
  }

  static async getPhaseByName(phaseName) {
    const phase = await PhaseDAO.getPhaseByName(phaseName);

    if (!phase) {
      throw new NotFoundError('Phase not found');
    }

    return phase;
  }

  static async createPhase(phaseData) {
    // Validate phase data
    const { error } = phaseValidator.validate(phaseData);
    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    // Create phase
    return await PhaseDAO.createPhase(phaseData);
  }

  static async updatePhase(phaseId, phaseData) {
    // Check if phase exists
    const existingPhase = await PhaseDAO.findPhaseById(phaseId);
    if (!existingPhase) {
      throw new NotFoundError('Phase not found');
    }

    // Validate updated data
    const { error } = phaseValidator.validate(phaseData);
    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    // Update phase
    return await PhaseDAO.updatePhase(phaseId, phaseData);
  }

  static async deletePhase(phaseId) {
    // Check if phase exists
    const existingPhase = await PhaseDAO.findPhaseById(phaseId);
    if (!existingPhase) {
      throw new NotFoundError('Phase not found');
    }

    // Delete phase
    return await PhaseDAO.deletePhase(phaseId);
  }
}

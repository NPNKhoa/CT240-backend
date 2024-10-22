import bcrypt from 'bcrypt';
import {PhaseDAO} from '../data/PhaseDAO.js';
export class PhaseService {
    static async getAllPhase(){
        const phases = await PhaseDAO.getAllPhase();
        if (phases === null || (Array.isArray(phases) && phases.length === 0)){
            throw new NotFoundError('Phase not found');
        }

        return phases;
    }

    static async getPhaseByName(phaseName){
        return await PhaseDAO.getPhaseByName(phaseName);
    }

    static async createPhase(phaseData){
        const Phase = {
            ...phaseData,
        };
        return await PhaseDAO.createPhase(phaseData);
    }
    static async updatePhase(phaseId,phaseData){
        return await PhaseDAO.updatePhase(phaseId,phaseData);
    }

    static async deletePhase(phaseId){
        return await PhaseDAO.deletePhase(phaseId);
    }
}

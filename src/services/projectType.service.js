import { ProjectTypeDAO } from '../data/ProjectTypeDAO.js';
import bcrypt from 'bcrypt';

export class ProjectTypeService {
  static async getAllProjectTypes() {
    const projectTypes = await ProjectTypeDAO.getAllUsers();

    if (projectTypes === null || (Array.isArray(projectTypes) && projectTypes.length === 0)) {
      throw new NotFoundError('ProjectType not found');
    }

    return projectTypes;
  }

  static async getProjectById(projectTypeId) {
    return await ProjectTypeDAO.getProjectTypeById(projectTypeId);
  }

  static async createProjectType(projectTypeData) {
    const projectType = {
      ...projectTypeData,
    };
    return await ProjectTypeDAO.createProjectType(projectType);
  }

  static async updateProjectType(projectTypeId, updateData) {
    return await ProjectTypeDAO.updateProjectType(projectTypeId, updateData);
  }

  static async deleteProjectType(projectTypeId) {
    return await ProjectTypeDAO.deleteProjectType(projectTypeid);
  }
}

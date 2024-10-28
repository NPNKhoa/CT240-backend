import { ProjectTypeDAO } from '../data/ProjectTypeDAO.js';
import { NotFoundError, ValidationError } from '../utils/Error.js';
import { projectTypeValidator } from '../validators/projectTypeValidator.js';

export class ProjectTypeService {
  static async getAllProjectTypes() {
    const projectTypes = await ProjectTypeDAO.getAllProjectTypes();

    if (projectTypes === null || (Array.isArray(projectTypes) && projectTypes.length === 0)) {
      throw new NotFoundError('Project types not found');
    }

    return projectTypes;
  }

  static async getProjectTypeById(projectTypeId) {
    const projectType = await ProjectTypeDAO.getProjectTypeById(projectTypeId);

    if (!projectType) {
      throw new NotFoundError('Project type not found');
    }

    return projectType;
  }

  static async createProjectType(projectTypeData) {
    // Validate project type data
    const { error } = projectTypeValidator.validate(projectTypeData);
    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    // Create project type
    return await ProjectTypeDAO.createProjectType(projectTypeData);
  }

  static async updateProjectType(projectTypeId, updateData) {
    // Check if project type exists
    const existingProjectType = await ProjectTypeDAO.getProjectTypeById(projectTypeId);
    if (!existingProjectType) {
      throw new NotFoundError('Project type not found');
    }

    // Validate updated data
    const { error } = projectTypeValidator.validate(updateData);
    if (error) {
      throw new ValidationError(error.details[0].message);
    }

    // Update project type
    return await ProjectTypeDAO.updateProjectType(projectTypeId, updateData);
  }

  static async deleteProjectType(projectTypeId) {
    // Check if project type exists
    const existingProjectType = await ProjectTypeDAO.getProjectTypeById(projectTypeId);
    if (!existingProjectType) {
      throw new NotFoundError('Project type not found');
    }

    // Delete project type
    return await ProjectTypeDAO.deleteProjectType(projectTypeId);
  }
}

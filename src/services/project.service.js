import { ProjectDAO } from '../data/ProjectDAO.js';
import { NotFoundError, ValidationError } from '../utils/Error.js';

export class ProjectService {
  static async getAllProjects() {
    const projects = await ProjectDAO.findAllProjects();

    if (
      projects === null ||
      (Array.isArray(projects) && projects.length === 0)
    ) {
      throw new NotFoundError('Projects not found');
    }

    return projects;
  }

  static async getProjectById(projectId) {
    const project = await ProjectDAO.findProjectById(projectId);

    if (project == null) {
      throw new NotFoundError('Project not found');
    }

    return project;
  }

  static async createProject(projectData) {
    return await ProjectDAO.createProject(projectData);
  }

  static async updateProject(projectId, updateData) {
    const existingProject = await ProjectDAO.findProjectById(projectId);

    if (!existingProject) {
      throw new ValidationError('Project not found');
    }

    return await ProjectDAO.updateProject(projectId, updateData);
  }

  static async deleteProject(projectId) {
    const existingProject = await ProjectDAO.findProjectById(projectId);

    if (!existingProject) {
      throw new ValidationError('Project not found');
    }

    return await ProjectDAO.deleteProject(projectId);
  }
}

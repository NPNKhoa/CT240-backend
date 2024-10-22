import { Project } from '../models/Project.js';

export class ProjectDAO {
  static async createProject(projectData) {
    const project = new Project(projectData);
    return await project.save();
  }

  static async findProjectById(projectId) {
    return await Project.findById(projectId).populate('projectType');
  }

  static async findAllProjects() {
    return await Project.find().populate('projectType');
  }

  static async updateProject(projectId, updateData) {
    return await Project.findByIdAndUpdate(projectId, updateData, {
      new: true,
    });
  }

  static async deleteProject(projectId) {
    return await Project.findByIdAndDelete(projectId);
  }
}

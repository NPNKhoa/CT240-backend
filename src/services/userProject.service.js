import { UserProjectDAO } from '../data/UserProjectDAO.js';
import { NotFoundError, ConflictError } from '../utils/Error.js';

export class UserProjectService {
  static async getAllUserProjects() {
    const userProjects = await UserProjectDAO.getAllUserProjects();

    if (!userProjects || userProjects.length === 0) {
      throw new NotFoundError('User projects not found');
    }

    return userProjects;
  }

  static async getUserProjectById(id) {
    const userProject = await UserProjectDAO.getUserProjectById(id);

    if (!userProject) {
      throw new NotFoundError('User project not found');
    }

    return userProject;
  }

  static async createUserProject(data) {
    const existingUserProject = await UserProjectDAO.findUserRole(
      data.userId,
      data.projectId
    );

    if (existingUserProject) {
      throw new ConflictError('User already has a role in this project');
    }

    return await UserProjectDAO.createUserProject(data);
  }

  static async deleteUserProject(id) {
    const userProject = await UserProjectDAO.getUserProjectById(id);

    if (!userProject) {
      throw new NotFoundError('User project not found');
    }

    return await UserProjectDAO.deleteUserProject(id);
  }

  static async getUserProjectByProjectId(projectId) {
    const userProjects = await UserProjectDAO.findByProjectId(projectId);

    if (Array.isArray(userProjects) && userProjects.length === 0) {
      throw new NotFoundError('Can not found user in this project');
    }

    return userProjects;
  }

  static async getUserProjectByUserId(userId) {
    const userProjects = await UserProjectDAO.findByUserId(userId);

    if (Array.isArray(userProjects) && userProjects.length === 0) {
      throw new NotFoundError('Can not found project for this user');
    }

    return userProjects;
  }

  static async findOwnProjects(userId) {
    const ownProjects = await UserProjectDAO.findOwnProjects(userId);

    if (!ownProjects || ownProjects.length === 0) {
      throw new NotFoundError('No owned projects found for this user');
    }

    return ownProjects;
  }
}

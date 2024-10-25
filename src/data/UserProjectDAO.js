import { UserProject } from '../models/UserProject.js';

export class UserProjectDAO {
  static async getAllUserProjects() {
    return await UserProject.find().populate('userId').populate('projectId');
  }

  static async getUserProjectById(id) {
    return await UserProject.findById(id)
      .populate('userId')
      .populate('projectId');
  }

  static async createUserProject(data) {
    const userProject = new UserProject(data);
    return await userProject.save();
  }

  static async deleteUserProject(id) {
    return await UserProject.findByIdAndDelete(id);
  }

  static async findUserRole(userId, projectId) {
    return await UserProject.findOne({ userId, projectId });
  }

  static async findByProjectId(projectId) {
    return await UserProject.find({ projectId });
  }

  static async findByUserId(userId) {
    return await UserProject.find({ userId });
  }
}

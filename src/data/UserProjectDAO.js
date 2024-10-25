import { UserProject } from '../models/UserProject.js';

export class UserProjectDAO {
  static async getAllUserProjects() {
    return await UserProject.find().populate('projectId').populate({
      path: 'userId',
      model: 'User',
      select: '-password',
    });
  }

  static async getUserProjectById(id) {
    return await UserProject.findById(id)
      .populate({
        path: 'userId',
        model: 'User',
        select: '-password',
      })
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
    return await UserProject.find({ projectId }).select('userId').populate({
      path: 'userId',
      model: 'User',
      select: '-password',
    });
  }

  static async findByUserId(userId) {
    return await UserProject.find({ userId })
      .select('projectId')
      .populate('projectId');
  }

  static async findOwnProjects(userId) {
    return await UserProject.find({ userId, userRole: 'owner' })
      .select('projectId')
      .populate('projectId');
  }
}

import { UserProjectDAO } from '../data/UserProjectDAO.js';
import { ProjectService } from '../services/project.service.js';
import { handleError } from '../utils/handleError.js';
import {
  projectIdSchema,
  projectUpdateSchema,
  projectValidator,
} from '../validators/projectValidator.js';

export class ProjectController {
  static async createProject(req, res) {
    const { id: userId } = req.userId;

    const { objectIdError } = projectIdSchema.validate(req.body.projectType);

    if (objectIdError) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { error } = projectValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const existingUserProject = await UserProjectDAO.findUserRole(
        userId,
        projectId
      );

      if (!existingUserProject || existingUserProject.userRole !== 'owner') {
        return res.status(403).json({
          message: 'You are not the project owner!',
        });
      }

      const newProject = await ProjectService.createProject(req.body);

      res.status(201).json({
        data: newProject,
      });
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getProjectById(req, res) {
    try {
      const project = await ProjectService.getProjectById(req.params.id);
      res.status(200).json(project);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getAllProjects(_, res) {
    try {
      const projects = await ProjectService.getAllProjects();
      res.status(200).json(projects);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async updateProject(req, res) {
    const { id: userId } = req.userId;

    const { id: projectId } = req.params;

    projectIdSchema.validate(projectId);

    if (objectIdError) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { error } = projectUpdateSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const existingUserProject = await UserProjectDAO.findUserRole(
        userId,
        projectId
      );

      if (!existingUserProject || existingUserProject.userRole !== 'owner') {
        return res.status(403).json({
          message: 'You are not the project owner!',
        });
      }

      const updatedProject = await ProjectService.updateProject(
        projectId,
        req.body
      );

      res.status(200).json(updatedProject);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async deleteProject(req, res) {
    const { id: userId } = req.userId;

    try {
      const existingUserProject = await UserProjectDAO.findUserRole(
        userId,
        projectId
      );

      if (!existingUserProject || existingUserProject.userRole !== 'owner') {
        return res.status(403).json({
          message: 'You are not the project owner!',
        });
      }

      await ProjectService.deleteProject(req.params.id);

      res.sendStatus(204);
    } catch (error) {
      handleError(error, res);
    }
  }
}

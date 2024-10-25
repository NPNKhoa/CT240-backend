import { UserProjectService } from '../services/userProject.service.js';
import { handleError } from '../utils/handleError.js';
import { projectIdSchema } from '../validators/projectValidator.js';
import { userProjectValidator } from '../validators/userProjectValidator.js';
import { userIdSchema } from '../validators/userValidator.js';

export class UserProjectController {
  static async getAllUserProjects(_, res) {
    try {
      const userProjects = await UserProjectService.getAllUserProjects();
      res.status(200).json(userProjects);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getUserProjectById(req, res) {
    try {
      const userProject = await UserProjectService.getUserProjectById(
        req.params.id
      );

      if (!userProject) {
        return res.status(404).json({ message: 'User project not found' });
      }

      res.status(200).json(userProject);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async createUserProject(req, res) {
    const { error } = userProjectValidator.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newUserProject = await UserProjectService.createUserProject(
        req.body
      );

      res.status(201).json(newUserProject);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async deleteUserProject(req, res) {
    try {
      await UserProjectService.deleteUserProject(req.params.id);
      res.status(204).send();
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getUsersInProject(req, res) {
    try {
      const users = await UserProjectService.getUserProjectByProjectId(
        req.params.id
      );

      const { error } = projectIdSchema(req.params.id);

      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }

      return res.status(200).json({
        data: users,
      });
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getProjectByUser(req, res) {
    try {
      const users = await UserProjectService.getUserProjectByUserId(
        req.params.id
      );

      const { error } = userIdSchema(req.params.id);

      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }

      return res.status(200).json({
        data: users,
      });
    } catch (error) {
      handleError(error, res);
    }
  }
}

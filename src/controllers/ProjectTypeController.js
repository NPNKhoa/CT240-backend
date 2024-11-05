import { ProjectTypeService } from '../services/projectType.service.js';
import { projectTypeValidator } from '../validators/projectTypeValidator.js';
import { handleError } from '../utils/handleError.js';
export class ProjectTypesController {
  static async getAllProjectTypes(_, res) {
    try {
      const projectType = await ProjectTypeService.getAllProjectTypes();
      res.status(200).json(projectType);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getProjectTypeById(req, res) {
    try {
      const projectType = await ProjectTypeService.getProjectById(
        req.params.id
      );
      if (!projectType) {
        return res.status(404).json({ message: 'ProjectType not found' });
      }
      res.status(200).json(projectType);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async createProjectType(req, res) {
    const { error } = projectTypeValidator.validate(req.body);

    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }

    try {
      const newProjectType = await ProjectTypeService.createProjectType(
        req.body
      );
      res.status(201).json(newProjectType);
    } catch (error) {
      // res.status(400).json({ message: error.message });
      handleError(error, res);
    }
  }

  static async updateProjectType(req, res) {
    try {
      const projectType = await ProjectTypeService.updateProjectType(
        req.params.id,
        req.body
      );
      res.status(200).json(projectType);
    } catch (error) {
      // res.status(400).json({ message: error.message });
      handleError(error, res);
    }
  }

  static async deleteProjectType(req, res) {
    try {
      await ProjectTypeService.deleteProjectType(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      handleError(error, res);
    }
  }
}

import { FileService } from '../services/file.service.js';
import { handleError } from '../utils/handleError.js';

export class FileController {
  static async uploadFile(req, res) {
    try {
      const files = req?.files?.map((file) => ({
        filePath: file.path,
        fileType: file.mimetype,
        storageURL: `/uploads/${file.filename}`,
      }));

      const savedFiles = await Promise.all(
        files?.map((fileData) => FileService.createFile(fileData))
      );

      res.status(201).json(savedFiles);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getAllFiles(req, res) {
    try {
      const files = await FileService.getAllFiles();
      res.status(200).json(files);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async getFileById(req, res) {
    try {
      const file = await FileService.getFileById(req.params.id);
      res.status(200).json(file);
    } catch (error) {
      handleError(error, res);
    }
  }

  static async deleteFile(req, res) {
    try {
      await FileService.deleteFile(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      handleError(error, res);
    }
  }
}

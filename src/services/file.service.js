import { FileDAO } from '../data/FileDAO.js';
import { NotFoundError } from '../utils/Error.js';

export class FileService {
  static async createFile(fileData) {
    return await FileDAO.createFile(fileData);
  }

  static async getAllFiles() {
    const files = await FileDAO.getAllFiles();
    if (!files || files.length === 0) {
      throw new NotFoundError('No files found');
    }
    return files;
  }

  static async getFileById(fileId) {
    const file = await FileDAO.getFileById(fileId);
    if (!file) {
      throw new NotFoundError('File not found');
    }
    return file;
  }

  static async deleteFile(fileId) {
    const file = await FileDAO.getFileById(fileId);
    if (!file) {
      throw new NotFoundError('File not found');
    }

    return await FileDAO.deleteFile(fileId);
  }
}

import { FileDAO } from '../data/FileDAO.js';
import { NotFoundError } from '../utils/Error.js';
import cloudinary from '../configs/cloudinary.js';
import fs from 'fs';

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

  static async uploadAndSaveFile(file) {
    const result = await cloudinary.uploader.upload(file.filePath, {
      folder: 'CT240',
    });

    fs.unlinkSync(file.filePath);

    const fileData = {
      filePath: file.filePath,
      fileType: file.fileType,
      storageURL: result.secure_url,
    };

    return await FileDAO.createFile(fileData);
  }
}

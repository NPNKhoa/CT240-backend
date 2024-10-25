import { File } from '../models/File.js';

export class FileDAO {
  static async createFile(fileData) {
    const file = new File(fileData);
    return await file.save();
  }

  static async getAllFiles() {
    return await File.find({});
  }

  static async getFileById(fileId) {
    return await File.findById(fileId);
  }

  static async deleteFile(fileId) {
    return await File.findByIdAndDelete(fileId);
  }
}

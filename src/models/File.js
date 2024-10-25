import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filePath: { type: String, required: true },
  fileType: { type: String, required: true },
  uploadedTime: { type: Date, default: Date.now },
  storageURL: { type: String },
});

export const File = mongoose.model('File', fileSchema);

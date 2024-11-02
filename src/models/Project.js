import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  projectType: {
    type: mongoose.Types.ObjectId,
    ref: 'ProjectType',
    required: true,
  },
  projectDescription: { type: String },
  projectCreateDate: { type: Date, default: Date.now },
  projectStatus: {
    type: String,
    enum: ['active', 'completed', 'canceled'],
    default: 'canceled',
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
});

export const Project = mongoose.model('Project', projectSchema);

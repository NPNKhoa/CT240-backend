import mongoose from 'mongoose';

const userProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    projectId: {
      type: mongoose.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    userRole: {
      type: String,
      enum: ['owner', 'member'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserProject = mongoose.model('UserProject', userProjectSchema);

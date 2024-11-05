import mongoose from 'mongoose';

const responseSchema = new mongoose.Schema({
  responseAnswer: { type: String },
  fileIds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'File',
    },
  ],
  questionId: {
    type: mongoose.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const Response = mongoose.model('Response', responseSchema);

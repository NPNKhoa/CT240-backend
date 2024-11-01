import mongoose from 'mongoose';

const sampleSchema = new mongoose.Schema(
  {
    sampleTitle: { type: String, required: true },
    sampleDescription: { type: String },
    collectionDate: { type: Date },
    location: { type: String },
    sampleType: { type: String, required: true },
    questionId: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Question',
        required: true,
      },
    ],
    phaseId: {
      type: mongoose.Types.ObjectId,
      ref: 'Phase',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Sample = mongoose.model('Sample', sampleSchema);

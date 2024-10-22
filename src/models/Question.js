import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  questionType: { type: String },
  sampleId: { type: mongoose.Types.ObjectId, ref: 'Sample' },
});

const Question = mongoose.model('Question', questionSchema);

export { Question };

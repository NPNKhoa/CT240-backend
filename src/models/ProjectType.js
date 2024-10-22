import mongoose from 'mongoose';

const ProjectTypeSchema = new mongoose.Schema({
  projectTypeName: {type: String, required: true},
});

const ProjectType = mongoose.model('ProjectType', ProjectTypeSchema);

export { ProjectType };

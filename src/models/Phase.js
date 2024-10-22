import mongoose from 'mongoose';

const phaseSchema = new mongoose.Schema({
    phaseName: {type: String , required: true},
    phaseDescription: {type: String , required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    projectId: {type: mongoose.Types.ObjectId,ref: 'Project'},
});

const Phase = mongoose.model('Phase', phaseSchema);

export { Phase };

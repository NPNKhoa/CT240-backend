import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number },
  dateOfBirth: { type: Date },
  address: { type: String },
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
});

const User = mongoose.model('User', userSchema);

export default User;

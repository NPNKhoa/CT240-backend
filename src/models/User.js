import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number },
  email: { type: String, required: true },
  dateOfBirth: { type: Date },
  address: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export { User };

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    default: '',
  },
  age: {
    type: Number,
  },
  dataOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

export { User };

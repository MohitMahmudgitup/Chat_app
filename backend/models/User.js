import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
  age: {
    type: Number,
    min: 13,
    required: [true, 'Please enter a age'],
  },
  profilePic: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

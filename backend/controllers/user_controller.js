import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register New User
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, confirmpassword, profilePic, age } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success:false, error:true, message: 'User already exists' });
    }
    if (password !== confirmpassword) {
      return res.status(400).json({ success:false, error:true, message: 'Passwords do not match' });
    }
    if (age < 13) {
      return res.status(400).json({ success:false, error:true, message: 'You must be at least 13 years old to register' });
    }
    if (!username || !email || !password || !confirmpassword || !age) {
      return res.status(400).json({ success:false, error:true, message: 'Please fill in all fields' });
    }
    if (password.length < 6) {
      return res.status(400).json({ success:false, error:true, message: 'Password must be at least 6 characters long' });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      age,
      profilePic,
    });

    res.status(201).json({
        success: true,
        massage: 'User registered successfully',
        error: false,
        user ,
        token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error  });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        error: false,
        user,
        token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get User Profile
export const getUser = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });

    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error",
            error: error.message 
        });
    }
};
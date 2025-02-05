# This service handles user registration, login, and token generation logic.
  
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Helper function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register new user
exports.registerUser = async (userData) => {
  const { username, email, password } = userData;

  // Check if the email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
};

// Login user
exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error('User not found');
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');
  
  const token = generateToken(user);
  return { user, token };
};

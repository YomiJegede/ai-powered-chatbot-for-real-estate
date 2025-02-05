

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register service logic
exports.registerUser = async (userData) => {
  const { username, email, password } = userData;
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

// Login service logic
exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error('User not found');
  
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error('Invalid password');
  
  return generateToken(user);
};


// src/controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret'; // En un entorno de producción, usa una variable de entorno

const register = async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findByUsername(username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const user = await User.create(username, password);
  res.status(201).json({ message: 'User created successfully' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const isMatch = await User.comparePassword(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { register, login };

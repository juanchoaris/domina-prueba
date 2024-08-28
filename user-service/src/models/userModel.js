// src/models/userModel.js
const bcrypt = require('bcryptjs');

let users = []; // Simula una base de datos en memoria

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password; // La contraseña se guardará encriptada
  }

  static async create(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(username, hashedPassword);
    users.push(user);
    return user;
  }

  static async findByUsername(username) {
    return users.find(user => user.username === username);
  }

  static async comparePassword(candidatePassword, hashedPassword) {
    return bcrypt.compare(candidatePassword, hashedPassword);
  }
}

module.exports = User;

const mongoose = require('mongoose');

// Definir el esquema para el modelo de Usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Crear y exportar el modelo de Usuario basado en el esquema
const User = mongoose.model('User', userSchema);

module.exports = User;

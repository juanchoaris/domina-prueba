// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

// Configuración de las rutas
app.use('/api/auth', authRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Inicia el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});

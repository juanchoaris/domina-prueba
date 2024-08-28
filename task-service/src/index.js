const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/taskdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/tasks', taskRoutes);

app.listen(4000, () => console.log('Task service running on port 4000'));

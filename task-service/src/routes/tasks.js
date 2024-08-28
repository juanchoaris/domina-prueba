const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Create Task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).send('Task created');
});

// Update Task
router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(task);
});

// Delete Task
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send('Task deleted');
});

module.exports = router;

import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [title, setTitle] = useState('');

  const handleAddTask = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:4000/tasks', { title }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTitle('');
      // Optionally, refresh task list here
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;

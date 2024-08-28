import React from 'react';
import Register from './Auth/Register';
import Login from './Auth/Login';
import TaskList from './Tasks/TaskList';
import TaskForm from './Tasks/TaskForm';

const App = () => {
  return (
    <div>
      <h1>User and Task Management</h1>
      <Register />
      <Login />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;

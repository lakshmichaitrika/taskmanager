// TaskList.js
import React from 'react';
import Task from '../Task/Task';
import './TaskList.css'
//import axios from 'axios';
const TaskList = ({ tasks, onDelete, onUpdate }) => {
  console.log(tasks)
  return (
    <div className='tasklist-container'>
      <h1 className='main-heading'>Task List</h1>
      <ul className='task-item-container'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

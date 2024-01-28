
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList/TaskList';
import TaskForm from './TaskForm/TaskForm';
import Home from './Home/Home';
import Notfound from './notfound/Notfound'

import { Route, Routes } from 'react-router-dom';

import axios from "axios";
import "./index.css"
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    axios.get('https://taskmanager/tasks.onrender.com',{})
    .then(res=>{
      //console.log(res)
      setTasks(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  console.log(tasks)
  //localStorage.setItem("taskList",JSON.stringify(tasks))
  

  const addTask = (task) => {
    setTasks([...tasks, { id:uuidv4() , ...task }]);
    axios.post('https://taskmanager/tasks.onrender.com',task)
    .then(res=>{
      //console.log(res)
    })
    .catch(err=>{
      //console.log(err)
    })
    
  };

  const deleteTask = (taskId) => {
    axios.delete(`https://taskmanager/tasks/${taskId}.onrender.com`)
    .then(res=>{
      //console.log(res)
      const newTasks=tasks.filter((task) => task.id !== taskId)
      setTasks(newTasks);
    })
    .catch(err=>{
      console.log(err)
    })
    //
  };

  const updateTask = (taskId, updatedTask) => {
    axios.put(`https://taskmanager/tasks/${taskId}.onrender.com`,updatedTask)
    .then(res=>{
      //console.log(res)
      setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task)));
      
    })
    .catch(err=>{
      console.log(err)
    })
    
  };

  return (
    <div className='Task-manager-container'>
      <Routes>
			<Route path='/' element={<Home />} />
			<Route path='/task' element={<TaskForm onSubmit={addTask} />}/>
      <Route path='/alltask' element={ <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />}/>
			<Route path='*' element ={<Notfound/>}/>
		</Routes>
    </div>
  );
};

export default TaskManager;

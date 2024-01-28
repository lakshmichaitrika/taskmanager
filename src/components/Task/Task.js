// TaskItem.js
import React, { useState } from 'react';
import "./Task.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  
  

   
  const handleEditToggle = () => {
    setEditing(!isEditing);
    setShow(true);
  };

  const handleUpdate = () => {
    onUpdate(task.id, { title, description });
    setEditing(false);
    setShow(false)
  };

  return (
    <li className='task'>
      {isEditing ? (
         <Modal
         show={show}
         onHide={handleClose}
         backdrop="static"
         keyboard={false}
       >
         
         <div className='update-container'>
          <h2 className='heading'>Update Task</h2>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button  className="button1" onClick={handleUpdate}>Save</Button>
        </div>
         
         
       </Modal>
      
      ) : (
        <div>
          <h5>{task.title}</h5>
          <p>{task.description}</p>
          <div className='icons'>
          <button className='icons-buttons' onClick={handleEditToggle}><CiEdit style={{color:"pink"}}/></button>
          <button className='icons-buttons' onClick={() => onDelete(task.id)}><MdDelete /></button>
   
          </div>
      </div>
      )}
    </li>
  );
};

export default TaskItem;

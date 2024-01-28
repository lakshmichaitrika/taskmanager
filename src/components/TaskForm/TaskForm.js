// TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css'
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [show, setShow] = useState(false);
  const [update,setUpdate]=useState(false)
  const [description, setDescription] = useState('');
 
  console.log(update,"update")
  const handleShow = () => setUpdate(true);
  const handleClose = () => setUpdate(false);
 
 
  if (show) {
    
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! No title add!</Alert.Heading>
       
      </Alert>
    );
  }

  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,"title")
    
    if (title===''){
      setShow(true)
      setUpdate(false)
    }
    else{
      
      
      onSubmit({ title, description });
      setUpdate(true)

      setTitle('');
      setDescription('');
      
    }
    
  };

  return (
    <div className='Task-manager-container'>
      <h1 className='main-heading'>Add Task</h1>
      
    <div className='form'>
      <form onSubmit={handleSubmit} className='form-content'>
         <div className='form-controlls'>
          <label  htmlFor='title'  >Title: </label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-controlls'>
          <label  htmlFor='description'>Description:</label>
        <textarea value={description} id="description" rows="4" cols="50" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit"  onClick={handleShow}>
        Add Task 
      </button>
        <Modal
        show={update}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>Task Added Successfully</Modal.Title>
        </Modal.Header>
        
      </Modal>
        
    </form>
    
    </div>
    </div>
   
  );
};

export default TaskForm;

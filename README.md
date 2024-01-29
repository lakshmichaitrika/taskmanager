# React.js and Node.js Task Manager Application

This is a full-stack task manager application that allows users to perform basic CRUD operations on tasks. The frontend is built using React.js, and the backend is implemented with Node.js and SQLite3.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd taskmanager-app
### Setup and Basic Structure

2.**Initialize React App:**
     npx create-react-app my-app
     cd my-app
   **Initialize Node.js:**
     mkdir todo-server
     cd todo-server
     npm init -y
   **Initial Database**
     npx knex init
     npx knex migrate:make todos
     npx knex migrate latest
     npx knex seed:make filename
     npx knex seed:run
     





## Install dependencies:
   

3. **dependencies:**

   =>Frontend

   "axios": "^1.6.7",
    "bootstrap": "^5.3.2",
    "react": "^18.2.0",
    "react-bootstrap": "^2.10.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.21.3",
    "react-scripts": "5.0.1",
    "uuid": "^9.0.1",

   =>Backend and database
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "helmet": "^7.1.0",
    "knex": "^3.1.0",
    "nodemon": "^3.0.3",
    "sqlite3": "^5.1.7"
   

4.**start Application:**
    .Frontend (React.js):npm start
    .nodemon index.js

5.**Interact with the application:**
   Open your browser and navigate to http://localhost:3000.Use the provided form to add new tasks.
   View the list of tasks, edit, and delete them as needed

## Project Structure
**Frontend Structure**
The project is structured into the following components:

index.js: The main application component managing the overall state.
**components**
TaskForm: Component for creating new tasks.
TaskList: Component for displaying the list of tasks.
Task: Component representing an individual task, allowing editing and deletion.
Home:Component for displaying landing page
NotFound:Component for error page 

**Backend Structure**
The backend is implemented with Node.js and SQLite3, providing API endpoints for CRUD operations on tasks. The main server file is index.js in the task-server directory.And server.js is used for all CRUD operations on tasks


### API Endpoints
1.***Create a new task***:
   Method: POST
   Endpoint: /tasks
   Request Payload: JSON with title and description
2.***Read a list of tasks***:
   Method: GET
   Endpoint: /tasks
3.***Update a task***:
   Method: PUT
   Endpoint: /tasks/:id
   Request Payload: JSON with updated title and description
4.***Delete a task***:
   Method: DELETE
   Endpoint: /tasks/:id

### Contributing
Feel free to contribute to this project by creating issues or submitting pull requests. Follow the standard GitHub workflow:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes.
Submit a pull request to the main repository's main branch.
License
This project is licensed under the ISC License.




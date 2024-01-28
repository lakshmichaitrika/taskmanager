import "./Home.css"
import {Link} from 'react-router-dom'

const Home=()=>{
    return(
        <div className="home-container">
            <div className="text-content">
            <p className="para">Hello ! Welcome to</p>
            <h1  className="start-heading" data-text="TaskManager">TaskManager</h1>
            <Link to="/task">
                <button type="button" className="add-buuton">Add Task</button>
            </Link>
            </div>
            <div className="image-container">
            <img src="https://img.freepik.com/free-vector/task-management-concept-illustration_335657-5485.jpg?w=740&t=st=1706355999~exp=1706356599~hmac=0d532c8b40015dcca3e80082323ec1924b4c07a6ee38ae455c9d0092b749cabc" className="image" alt="home"/>
       
            </div>
            
             </div>
    )
}

export default Home
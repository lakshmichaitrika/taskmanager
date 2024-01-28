import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {Link} from 'react-router-dom';
import { SiTask } from "react-icons/si";


const  Header=()=>{
  return (
    <>
       <Navbar expand="lg" bg="dark" variant="dark" sticky='top' >
      <Container>
        <Navbar.Brand href="#home"><SiTask /> Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'end'}}>
          <Nav style={{gap:'0.5rem',alignItems:'center'}}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/task">AddTask</Nav.Link>
            <Nav.Link as={Link} to="/alltask">ViewTask</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}




export default Header
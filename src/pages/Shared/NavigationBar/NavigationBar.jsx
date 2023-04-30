import React, { useContext } from 'react';
import { Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut=()=>{
      logOut()
      .then(result=> {})
      .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>
            <Nav.Link href="">
            About
            </Nav.Link>
            <Nav.Link href="">Career</Nav.Link>
          </Nav>
          <Nav>
            {user && <FaUserCircle style={{fontSize: '2rem'}} ></FaUserCircle>}
            
            {user ? <Button variant="secondary" onClick={handleLogOut}>LogOut</Button>: <Link to="/login">
            <Button variant="secondary">Login</Button>
            </Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavigationBar;
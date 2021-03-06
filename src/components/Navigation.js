import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ModalWindow from './ModalWindow';
import logo from '../images/icon-kurt-logo.png';

function Navigation({ isAuth, setIsAuth, bearer, setBearer }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    alert('Logout successful');
    setIsAuth(false);
    console.log(isAuth);
  };

  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="nav-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" onClick={() => navigate('/login')}>
                Login
              </Nav.Link>

              <Nav.Link href="" onClick={() => navigate('/signup')}>
                Sign Up
              </Nav.Link>

              <Nav.Link href="" onClick={handleShow}>
                Create Post
              </Nav.Link>
              <Nav.Link href="" onClick={handleLogout}>
                Log Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalWindow
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        bearer={bearer}
        setBearer={setBearer}
      />
    </>
  );
}

export default Navigation;

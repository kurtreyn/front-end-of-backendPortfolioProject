import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ModalWindow from './ModalWindow';
import logo from '../images/icon-kurt-logo.png';

function Navigation() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSignUpShow = () => setShow(true);
  const handleLoginShow = () => setShow(true);
  const [title, setTitle] = useState('');

  const SignUpModal = () => {
    return (
      <ModalWindow
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleSignUpShow}
        title={title}
        setTitle={setTitle}
      />
    );
  };

  const LoginModal = () => {
    return (
      <ModalWindow
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleLoginShow}
        title={title}
        setTitle={setTitle}
      />
    );
  };

  return (
    <>
      <Navbar className="custom-nav">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="nav-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" onClick={handleLoginShow}>
                Sign In
              </Nav.Link>
              <Nav.Link href="" onClick={handleSignUpShow}>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SignUpModal title="SIGN UP" />
      <LoginModal title="Log In" />
    </>
  );
}

export default Navigation;

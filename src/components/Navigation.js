import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ModalWindow from './ModalWindow';
import logo from '../images/icon-kurt-logo.png';

function Navigation() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSignUpShow = () => setShow(true);
  const handleLoginShow = () => setShow(true);
  // const handleShow = () => setShow(true);
  const [title, setTitle] = useState('');

  const handleModalClose = function () {
    setTitle('');
    handleClose();
  };

  const SignUpModal = () => {
    return (
      <ModalWindow
        show={show}
        setShow={setShow}
        handleClose={handleModalClose}
        handleShow={handleSignUpShow}
        title={title}
      />
    );
  };

  const LoginModal = () => {
    return (
      <ModalWindow
        show={show}
        setShow={setShow}
        handleClose={handleModalClose}
        handleShow={handleLoginShow}
        title={title}
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
              <Nav.Link href="" onClick={() => navigate('/login')}>
                Sign In
              </Nav.Link>
              <Nav.Link href="" onClick={() => navigate('/signup')}>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal />
      <SignUpModal />
    </>
  );
}

export default Navigation;

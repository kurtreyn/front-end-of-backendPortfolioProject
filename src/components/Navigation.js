import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/icon-kurt-logo.png';

function Navigation({ handleShow }) {
  const navigate = useNavigate();
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
              <Nav.Link onClick={() => navigate('/users/login')}>
                Log In
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/users/signup')}>
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

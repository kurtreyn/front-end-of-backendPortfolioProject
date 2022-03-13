import React, { useState, useEffect, useRef } from 'react';
import { Modal, Form, Button, Card } from 'react-bootstrap';

function ModalWindow({ show, handleClose, title }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <Modal className="modal-window" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Form onSubmit="">
              <Form.Group id="username" placeholder="username">
                <Form.Control
                  type="username"
                  placeholder="user name"
                  ref={usernameRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password" className="mt-2">
                <Form.Control
                  type="password"
                  placeholder="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>

              <Button
                // disabled={loading}
                className="w-100 mt-2 btn-log-in"
                type="submit"
                // onClick={handleSignup}
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;

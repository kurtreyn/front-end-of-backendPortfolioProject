import React, { useState } from 'react';
import { Modal, Form, Button, Card } from 'react-bootstrap';

function ModalWindow({ show, handleClose, onClick, handleModalClose }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  async function handlePost() {
    const raw = JSON.stringify({
      title: title,
      description: description,
      image: image,
    });
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify({
          raw,
        }),
      });
      console.log(response);
    } catch (errors) {
      console.log(errors);
    }
    setLoading(false);
  }

  return (
    <Modal className="modal-window" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group id="title" placeholder="Title">
                <Form.Control
                  type="title"
                  placeholder="title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group id="description" className="mt-2">
                <Form.Control
                  type="textarea"
                  placeholder="description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group id="imageURL" className="mt-2">
                <Form.Control
                  type="imageURL"
                  placeholder="image URL"
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                disabled={loading}
                className="w-100 mt-2 btn-log-in"
                type="submit"
                onClick={handlePost}
              >
                Post
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

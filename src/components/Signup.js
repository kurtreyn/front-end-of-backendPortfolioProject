import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signupUser = (username, password) => {
    username = JSON.stringify(usernameRef);
    password = JSON.stringify(passwordRef);
  };

  async function handleSignup() {
    setLoading(true);
    try {
      await signupUser(usernameRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error');
    }
    setLoading(false);
    navigate('/');
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>

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
              disabled={loading}
              className="w-100 mt-2 btn-log-in"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Signup;

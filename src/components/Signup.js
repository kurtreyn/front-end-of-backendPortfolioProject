import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Signup() {
  // const usernameRef = useRef();
  // const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [loginCred, setLoginCred] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  console.log(loginCred.username, loginCred.password);

  async function handleSignup() {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: loginCred.username,
          password: loginCred.password,
        }),
      });
      console.log(response);
    } catch (errors) {
      console.log(errors);
    }
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
                // ref={usernameRef}
                onChange={(e) => setLoginCred({ username: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Control
                type="password"
                placeholder="password"
                // ref={passwordRef}
                onChange={(e) => setLoginCred({ password: e.target.value })}
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

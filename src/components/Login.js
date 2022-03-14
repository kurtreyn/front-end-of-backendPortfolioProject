import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // console.log(username, password);

  async function handleLogin() {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      console.log(response);
    } catch (errors) {
      console.log(errors.message);
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>

          <Form onSubmit="">
            <Form.Group id="username" placeholder="username">
              <Form.Control
                type="username"
                placeholder="user name"
                // ref={usernameRef}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="password" className="mt-2">
              <Form.Control
                type="password"
                placeholder="password"
                // ref={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100 mt-2 btn-log-in"
              type="submit"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;

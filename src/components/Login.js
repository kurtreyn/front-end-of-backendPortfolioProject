import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

import gameCollage from '../images/game-collage.png';

function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    } catch (errors) {
      console.log(errors);
    }
    // navigate('/');
  }

  return (
    <div className="container-fluid">
      <Navigation />
      <div className="row login-signup-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 login-signup-text-col">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>

              <Form>
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
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 login-signup-img-col">
          <img src={gameCollage} alt="game collage" />
        </div>
      </div>
    </div>
  );
}

export default Login;

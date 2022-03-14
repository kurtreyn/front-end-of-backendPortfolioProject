import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

import gameCollage from '../images/game-collage.png';

function Signup() {
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
    // navigate('/');
  }

  return (
    <div className="container-fluid">
      <Navigation />
      <div className="row login-signup-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 login-signup-text-col">
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>

              <Form>
                <Form.Group id="username" placeholder="username">
                  <Form.Control
                    type="username"
                    placeholder="user name"
                    onChange={(e) => setLoginCred({ username: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group id="password" className="mt-2">
                  <Form.Control
                    type="password"
                    placeholder="password"
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
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 login-signup-img-col">
          <img src={gameCollage} alt="game collage" />
        </div>
      </div>
    </div>
  );
}

export default Signup;

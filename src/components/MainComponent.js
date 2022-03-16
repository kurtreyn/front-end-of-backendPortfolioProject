import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';

export default function MainComponent() {
  const [isAuth, setIsAuth] = useState(null);

  function checkLoginStatus() {
    const token = localStorage.getItem('token');
    console.log(token);
    token ? setIsAuth(true) : setIsAuth(false);
    console.log(isAuth);
  }

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              checkLoginStatus={checkLoginStatus}
            />
          }
        />
        <Route
          exact
          path="/login"
          element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
      </Routes>
    </div>
  );
}

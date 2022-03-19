import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';

export default function MainComponent() {
  const [isAuth, setIsAuth] = useState(null);
  const token = localStorage.getItem('token');

  // function checkLoginStatus() {
  //   if (token) {
  //     console.log(`true: ${token}`);
  //     setIsAuth(true);
  //   } else {
  //     setIsAuth(false);
  //     console.log(`false: ${token}`);
  //   }
  //   console.trace(isAuth);
  // }

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

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
              // checkLoginStatus={checkLoginStatus}
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

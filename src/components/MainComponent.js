import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';

export default function MainComponent() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage isAuth={isAuth} setIsAuth={setIsAuth} />}
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

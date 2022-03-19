import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';

export default function MainComponent() {
  const [isAuth, setIsAuth] = useState(null);
<<<<<<< HEAD
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
=======
  const [bearer, setBearer] = useState(null);
  const [token, setToken] = useState(null);

  function checkLoginStatus() {
    setToken(localStorage.getItem('token'));
    setBearer('Bearer ' + localStorage.getItem('token'));
    // console.log(token);
    token ? setIsAuth(true) : setIsAuth(false);
    // console.log(isAuth);
  }
>>>>>>> e40221c01cb60f4aabd0246c093e8589250d44b2

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);
<<<<<<< HEAD
=======

  console.log(`bearer: ${bearer}`);
  console.log(`token: ${token}`);
>>>>>>> e40221c01cb60f4aabd0246c093e8589250d44b2

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
<<<<<<< HEAD
              // checkLoginStatus={checkLoginStatus}
=======
              checkLoginStatus={checkLoginStatus}
              bearer={bearer}
              setBearer={setBearer}
>>>>>>> e40221c01cb60f4aabd0246c093e8589250d44b2
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

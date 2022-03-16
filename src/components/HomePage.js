import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import PostScreen from './PostScreen';
import LoadingScreen from './LoadingScreen';
// import axios from 'axios';

function HomePage({ isAuth, setIsAuth, checkLoginStatus }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/posts');
      let data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    // checkLoginStatus();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(isAuth);

  return (
    <>
      <div className="container-fluid homepage-container">
        <Navigation isAuth={isAuth} setIsAuth={setIsAuth} />
        <div className="row post-row">
          <h1>Video Game Database</h1>
          {loading ? <LoadingScreen /> : <PostScreen posts={posts} />}
        </div>
      </div>
    </>
  );
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import PostScreen from './PostScreen';
import LoadingScreen from './LoadingScreen';
import axios from 'axios';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/posts');
      // console.log(response);
      let data = await response.json();
      console.log(data);
      setPosts(data);

      // posts ? setLoading(false) : setLoading(true);
      // console.log(posts.length);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  posts.map((item) => {
    console.log(item.title);
  });

  // useEffect(() => {
  //   axios.get('http://localhost:3000/posts').then(function (response) {
  //     // handle success
  //     console.log(response.data);
  //     setPosts(response.data);
  //   });

  //   // .then((data) => setPosts(data.title));
  // }, []);

  // console.log(`posts are: ${posts}`);

  // console.log(`loading is: ${loading}`);

  return (
    <>
      <div className="container-fluid">
        <Navigation />
        <div className="row post-row">
          <h1>Video Game Database</h1>
          {/* <PostScreen posts={posts} /> */}
          {loading ? <LoadingScreen /> : <PostScreen posts={posts} />}
        </div>
      </div>
    </>
  );
}

export default HomePage;

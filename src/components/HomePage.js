import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

import placeholderImg from '../images/Gowbox.jpg';

function HomePage() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/posts');
      // console.log(response);
      let data = await response.json();
      console.log(data);
      setPosts(data);
      posts ? setLoading(false) : setLoading(true);
      console.log(posts.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const LoadingScreen = () => (
    <div>
      <h2>Loading content...</h2>
    </div>
  );

  const PostScreen = () =>
    posts.map((post) => {
      return (
        <>
          <div
            key={post.id}
            className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 post-img-col"
          >
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 post-text-col">
            <p>{post.description}</p>
          </div>
        </>
      );
    });

  console.log(`loading is: ${loading}`);

  return (
    <>
      <div className="container-fluid">
        <Navigation handleShow={handleShow} />
        <div className="row post-row">
          <h1>Video Game Database</h1>
          {loading ? <LoadingScreen /> : <PostScreen />}
        </div>
      </div>
    </>
  );
}

export default HomePage;

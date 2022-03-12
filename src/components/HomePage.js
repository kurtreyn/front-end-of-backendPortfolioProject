import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/posts').then(function (response) {
      // handle success
      // console.log(response.data);
      setPosts(response.data);
    });

    // .then((data) => setPosts(data.title));
  }, []);

  console.log(posts);

  return (
    <>
      <div className="container-fluid">
        <div className="row landing-row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
            {posts.map((post) => {
              return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
                    {post.title}
                  </div>
                  <img src={post.image} alt={post.title} />
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 img-col">
                    {post.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

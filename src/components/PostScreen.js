import React, { useState, useEffect } from 'react';

function PostScreen({ loading, setLoading }) {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      console.log(response);
      let data = await response.json();
      console.log(data);
      //   setPosts(data);
      posts ? setLoading(false) : setLoading(true);
      console.log(posts.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(`loading is: ${loading}`);

  return posts.map((post) => {
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
}

export default PostScreen;

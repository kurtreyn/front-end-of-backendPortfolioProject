import React from 'react';

function PostScreen({ posts }) {
  return posts.map((post) => {
    return (
      <div className="row" key={post._id}>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 post-img-col">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 post-text-col">
          <p>{post.description}</p>
        </div>
      </div>
    );
  });
}

export default PostScreen;

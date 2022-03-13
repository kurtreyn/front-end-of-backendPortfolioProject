import React, { useState } from 'react';
import Navigation from './Navigation';
import PostScreen from './PostScreen';
import LoadingScreen from './LoadingScreen';

function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="container-fluid">
        <Navigation />
        <div className="row post-row">
          <h1>Video Game Database</h1>

          {loading ? (
            <LoadingScreen />
          ) : (
            <PostScreen loading={loading} setLoading={setLoading} />
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;

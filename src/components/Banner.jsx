// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content d-flex justify-content-center align-items-center text-center">
        <div>
          <h1 className="banner-title">Welcome to Our Website</h1>
          <p className="banner-subtitle">
            Discover amazing content and experiences with us.
          </p>
          <button className="btn btn-primary mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

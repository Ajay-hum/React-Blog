import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="hero-section text-center text-white">
    <div className="container py-5">
      <h1>Your Style Journey Begins Here</h1>
      <p className="lead my-4">Explore the Latest Trends in Fashion</p>
      <p>Welcome to FashionBlog, your go-to source for the latest fashion trends, styles, and news. Stay updated with our curated content from fashion shows and designers worldwide.</p>
      <div className="d-flex justify-content-center mt-4">
      <Link to="/blogs">
        <button className="btn btn-warning btn-lg mx-2">Explore Trends</button>
      </Link>
        <button className="btn btn-outline-light btn-lg mx-2 text-color">Subscribe</button>
      </div>
    </div>
  </div>
);

export default Home;



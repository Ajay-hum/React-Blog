import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/HomeImage/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg'; // Correct image path
import Blogs from './Blogs';

const Home = () => (
  <div>
    <div className="hero-section text-center text-white">
      <div className="container py-5">
        <div className="image-container">
          <img src={image} className="hero-image" alt="Background" />
        </div>
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
    {/* Add Blogs Component Here */}
    <Blogs style={{marginTop: "2.5rem"}}/>
  </div>
);

export default Home;
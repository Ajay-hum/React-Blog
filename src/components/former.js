import React, { useState } from 'react';

import image1 from '../assets/BlogsImage/Paris Fashion week.jpg';
import image2 from '../assets/BlogsImage/man in suit.png';
import image3 from '../assets/Tools/armen-aydinyan-bhJfx7t4QUA-unsplash.jpg'

const blogPosts = [
  {
    id: 1,
    title: 'Top Trends from Paris Fashion Week 2024',
    excerpt: 'Discover the standout trends from the latest Paris Fashion Week and how they are shaping the fashion industry for 2024.',
    image: image1,
    author: "Ben Jackson",
    date: "9/12/2024",
  },
  {
    id: 2,
    title: 'Seasonal Outfits',
    excerpt: 'What to wear this season...',
    image: image2,
    author: "Hilda Maxwell",
    date: "11/12/2024",
  },
  {
    id: 2,
    title: 'Seasonal Outfits',
    excerpt: 'What to wear this season...',
    image: image3,
    author: "Larry James",
    date: "20/5/2024"
  },
  // Add more blog posts here
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Latest Posts logic
  const latestPosts = blogPosts.slice(0, 3); // Displaying the latest 3 posts

  // BlogPost component code, now within Blogs.js
  const BlogPost = ({ post }) => (
    <div className="col-md-6 d-flex mb-4">
      <div className="card blog-card h-100 w-100">
        <img src={post.image} className="card-img-top" alt={post.title} />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.excerpt}</p>
          <p className="blog-card-author">
            Posted by <strong>{post.author}</strong> on {post.date}
          </p>
          <button className="btn btn-warning">Read More</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      <div className="row">
        {/* Main Blog Posts Section */}
        <div className="col-md-9">
          <h2 className="mb-4">Check out the Latest Blog Trends from around the World</h2>
          <div className="row d-flex flex-wrap justify-content-between">
            {currentPosts.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
          {/* Pagination */}
          <nav className="mt-4">
            <ul className="pagination">
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <li key={pageNumber} className={`page-item ${currentPage === pageNumber + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(pageNumber + 1)}>
                    {pageNumber + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Latest Posts Section */}
        <div className="col-md-3">
          <h4 className="mb-4">Latest Posts</h4>
          <ul className="list-group">
            {latestPosts.map((post) => (
              <li key={post.id} className="list-group-item">
                <img src={post.image} className="card-img-top" alt={post.title} />
                <h6>{post.title}</h6>
                <p>{post.excerpt.slice(0, 50)}...</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
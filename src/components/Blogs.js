import React, { useState, useEffect } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Fetch the data from api.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../api.json'); // Adjust path if necessary
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

  const totalPosts = blogs.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Latest Posts logic
  const latestPosts = blogs.slice(0, 3); // Display the latest 3 posts

  // BlogPost component code
  const BlogPost = ({ post }) => (
    <div className="col-md-6 d-flex mb-4">
      <div className="card blog-card h-100 w-100">
        <img src={post.image} className="card-img-top" alt={post.title} />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          {/* Fallback for content */}
          <p className="card-text">
            {post.content ? post.content.slice(0, 100) : post.excerpt.slice(0, 100)}...
          </p>
          <p className="blog-card-author d-flex align-items-center">
            <strong>Author:</strong> <img src={post.author_Picture} className="rounded-circle mx-1 author-image" alt='author'/><strong>{post.author}</strong>
          </p>
          <p><strong>Published Date:</strong> {post.published_date}</p>
          <p><strong>Reading Time:</strong> {post.reading_time}</p>
          {/* <p><strong>Category:</strong> {post.category}</p> */}
          <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
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
                <p>{post.excerpt ? post.excerpt.slice(0, 50) : post.content.slice(0, 50)}...</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
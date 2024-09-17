import React from 'react';
import { Link } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: "Blog Post 1",
    description: "A brief description of blog post 1. This is a placeholder for the actual blog content.",
    date: "2023-05-01",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Blog Post 2",
    description: "Description for blog post 2. Replace this with the actual blog information.",
    date: "2023-05-15",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Blog Post 3",
    description: "Blog post 3 description. Update this with real blog details when available.",
    date: "2023-06-01",
    image: "https://via.placeholder.com/150"
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogData.map((post, index) => (
          <Link 
            to={`/blog/${post.id}`}
            key={index} 
            className="blog-card"
          >
            <div className="blog-image">
              <img src={post.image} alt={post.title} className="blog-thumbnail" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <p className="blog-date">{post.date}</p>
            </div>
            <div className="blog-arrow">→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

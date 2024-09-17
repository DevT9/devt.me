import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const blogPosts = {
  1: {
    title: "Sample Blog Post",
    date: "14 Dec, 2022",
    content: [
      { type: "text", content: "This is the first paragraph of the blog post. It can contain a lot of text explaining the topic in detail." },
      { type: "image", src: "https://via.placeholder.com/600x400", alt: "Sample image" },
      { type: "text", content: "This is the second paragraph, coming after an image. You can continue adding more paragraphs and images as needed." },
    ]
  },
  // Add more blog posts here
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) return <div>Blog post not found</div>;

  return (
    <div className="blog-post-container">
      <Link to="/blog" className="blog-post-back-link">
        <FaArrowLeft size="1.5em" />
      </Link>
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-post-date">{post.date}</p>
      <div className="blog-post-content">
        {post.content.map((item, index) => (
          item.type === "text" ? (
            <p key={index} className="blog-post-paragraph">{item.content}</p>
          ) : (
            <img key={index} src={item.src} alt={item.alt} className="blog-post-image" />
          )
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
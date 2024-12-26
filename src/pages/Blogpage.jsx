import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/Blog.css'

const BlogPage = () => {
  const navigate = useNavigate();

  const categories = ["Technology", "Health", "Lifestyle", "Education", "Business"];
  const blogs = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      category: "Technology",
      excerpt: "Explore how AI is reshaping industries and daily life...",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Top 10 Tips for a Healthy Lifestyle",
      category: "Health",
      excerpt: "Learn simple ways to improve your health in 2024...",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "Starting a Business in 2024",
      category: "Business",
      excerpt: "Key strategies to launch and grow your startup...",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Triche Nest Blog</h1>
        <p>Explore insights across various categories</p>
      </header>

      <div className="blog-categories">
        {categories.map((category, index) => (
          <button key={index} className="category-btn">
            {category}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

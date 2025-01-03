import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/Blog.css'

const BlogPage = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      category: "Technology",
      excerpt: "Explore how AI is reshaping industries and daily life...",
      image: "assets/ai.jpg",
    },
    {
      id: 2,
      title: "Top 10 Tips for a Healthy Lifestyle",
      category: "Health",
      excerpt: "Learn simple ways to improve your health in 2024...",
      image: "assets/healthy.jpg",
    },
    {
      id: 3,
      title: "Starting a Business in 2025",
      category: "Business",
      excerpt: "Key strategies to launch and grow your startup...",
      image: "assets/2025.jpg",
    },
  ];

  return (
    <section className="modern-blog-container">
        <header className="modern-blog-header">
          <h2>Our Latest Blogs</h2>
          <p>Stay up to date with the latest trends and insights from various fields.</p>
        </header>

        <div className="modern-blog-grid">
          {blogs.map((blog) => (
            <div
              className="modern-blog-card"
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img className="modern-blog-image" src={blog.image} alt={blog.title} />
              <div className="modern-blog-info">
                <h3>{blog.title}</h3>
                <span className="modern-blog-category">{blog.category}</span>
                <p className="modern-blog-excerpt">{blog.excerpt}</p>
                <button className="modern-read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default BlogPage;

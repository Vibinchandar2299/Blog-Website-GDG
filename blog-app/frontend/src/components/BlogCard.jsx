import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-500 mb-2">By {blog.author?.name} on {new Date(blog.createdAt).toLocaleDateString()}</p>
      <p className="text-gray-700 line-clamp-3 mb-4">{blog.content}</p>
      <Link to={`/blog/${blog._id}`} className="text-indigo-600 font-medium hover:underline">Read more</Link>
    </div>
  );
};

export default BlogCard;

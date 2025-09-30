import React from "react";
import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-2">
        By {blog.author?.name || 'Unknown Author'} • {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700 line-clamp-3">{blog.content}</p>
      <Link
        to={`/blogs/${blog._id}`}
        className="mt-3 inline-block text-indigo-600 font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;

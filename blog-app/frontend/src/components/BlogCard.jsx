import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteBlog } from "../api/api";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const handleDelete = async () => {
    try {
      await deleteBlog(blog._id);
      // Navigate to home to refresh the blog list
      navigate("/");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 hover:border-indigo-200">
      {/* Header with gradient */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
          {blog.title}
        </h2>
        
        {/* Author and date */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {blog.authorName?.charAt(0).toUpperCase() || '?'}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">
              {blog.authorName || 'Unknown Author'}
            </p>
            <p className="text-xs text-gray-500">
              {formatDate(blog.createdAt)}
            </p>
          </div>
        </div>
      </div>

      {/* Content preview */}
      <div className="mb-6">
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {blog.content}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between mt-6">
        <Link
          to={`/blogs/${blog._id}`}
          className="inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 group-hover:translate-x-1 transition-all duration-200"
        >
          <span>Read More</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Edit and Delete buttons - only show for blog owner */}
        {loggedInUser && loggedInUser.id === blog.author?._id && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigate(`/edit/${blog._id}`)}
              className="inline-flex items-center space-x-1 px-3 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Edit</span>
            </button>
            
            <button
              onClick={handleDelete}
              className="inline-flex items-center space-x-1 px-3 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>

      {/* Decorative gradient line */}
      <div className="mt-4 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default BlogCard;

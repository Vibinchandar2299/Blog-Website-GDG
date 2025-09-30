import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getBlogById, deleteBlog } from "../api/api";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await getBlogById(id);
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteBlog(id);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Article Header */}
      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8 shadow-2xl">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          {/* Author info */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {blog.authorName?.charAt(0).toUpperCase() || '?'}
              </span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {blog.authorName || 'Unknown Author'}
              </p>
              <p className="text-gray-500">
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        {loggedInUser && loggedInUser.id === blog.author?._id && (
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/edit/${blog._id}`}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Edit Story</span>
            </Link>
            <button
              onClick={handleDelete}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Delete Story</span>
            </button>
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
            {blog.content}
          </div>
        </div>
      </div>

      {/* Back to home */}
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Stories</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;

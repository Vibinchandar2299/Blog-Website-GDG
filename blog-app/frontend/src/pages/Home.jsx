import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../api/api";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Share Your Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover amazing content, share your thoughts, and connect with a community of writers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <Link 
                  to="/create" 
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Write Your Story</span>
                </Link>
              ) : (
                <>
                  <Link 
                    to="/signup" 
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <span>Get Started</span>
                  </Link>
                  <Link 
                    to="/login" 
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-200"
                  >
                    <span>Sign In</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
      </div>

      {/* Featured Section */}
      {blogs.length > 0 && (
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Stories
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what our community is writing about
          </p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {/* Blogs Grid */}
      {!loading && (
        <>
          {blogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No stories yet</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Be the first to share your thoughts and start the conversation in our community.
              </p>
              {user && (
                <Link 
                  to="/create" 
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Write Your First Story</span>
                </Link>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

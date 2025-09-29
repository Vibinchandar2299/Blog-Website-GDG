import React, { useEffect, useState } from "react";
import { getBlogs } from "../api/api";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await getBlogs();
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Home;

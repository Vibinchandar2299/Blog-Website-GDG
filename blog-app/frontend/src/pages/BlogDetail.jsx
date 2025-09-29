import React, { useEffect, useState } from "react";
import { getBlog, deleteBlog } from "../api/api";
import { useParams, useNavigate, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlog(id);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    await deleteBlog(id, token);
    navigate("/");
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">By {blog.author?.name} on {new Date(blog.createdAt).toLocaleDateString()}</p>
      <p className="text-gray-700 mb-4">{blog.content}</p>
      {user && user.id === blog.author._id && (
        <div className="flex gap-4">
          <Link to={`/edit/${id}`} className="text-indigo-600 font-medium">Edit</Link>
          <button onClick={handleDelete} className="text-red-500 font-medium">Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;

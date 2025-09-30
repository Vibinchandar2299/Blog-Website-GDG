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
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(id);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-800 whitespace-pre-line">{blog.content}</p>
      {loggedInUser && loggedInUser.id === blog.authorId && (
        <div className="mt-6 flex gap-4">
          <Link
            to={`/edit/${blog._id}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;

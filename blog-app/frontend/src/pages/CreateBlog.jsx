import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/api";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBlog({ title, content });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your blog content..."
          className="w-full p-3 border rounded-lg h-40 focus:ring focus:ring-indigo-300"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;

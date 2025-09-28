import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">GDG Blog</Link>
      <div>
        {user ? (
          <>
            <Link to="/create" className="mr-4 text-indigo-600 font-medium">Create Blog</Link>
            <button onClick={handleLogout} className="text-red-500 font-medium">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4 text-indigo-600 font-medium">Login</Link>
            <Link to="/signup" className="text-indigo-600 font-medium">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

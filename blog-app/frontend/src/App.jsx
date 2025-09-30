import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Layout({ children }) {
  return (
    <main className="container mx-auto px-4 py-8">{children}</main>
  );
}

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900">
      <Navbar />
      <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={user && token ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/signup"
            element={user && token ? <Navigate to="/" replace /> : <Signup />}
          />
          {/* Protected routes (with Layout) */}
          <Route
            path="/"
            element={(
              <Layout>
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </Layout>
            )}
          />
          <Route
            path="/blogs/:id"
            element={(
              <Layout>
                <ProtectedRoute>
                  <BlogDetail />
                </ProtectedRoute>
              </Layout>
            )}
          />
          <Route
            path="/create"
            element={(
              <Layout>
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              </Layout>
            )}
          />
          <Route
            path="/edit/:id"
            element={(
              <Layout>
                <ProtectedRoute>
                  <EditBlog />
                </ProtectedRoute>
              </Layout>
            )}
          />
        </Routes>
      </div>
  );
}

export default App;

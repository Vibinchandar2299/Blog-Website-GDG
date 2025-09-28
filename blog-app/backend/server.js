const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  })
  .catch(err => console.log(err));

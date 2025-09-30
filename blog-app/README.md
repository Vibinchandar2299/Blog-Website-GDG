# Blog Website

A modern, full-stack blog platform built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, blog management, and responsive design.

![Blog Website Demo](https://via.placeholder.com/1200x600?text=Blog+Website+Demonstration)

## ✨ Features

- 🔐 **User Authentication**
  - Secure JWT-based authentication
  - Protected routes for authenticated users
  - Session management

- 📝 **Blog Management**
  - Create, read, update, and delete blog posts
  - Rich text editing capabilities
  - Image upload support
  - Categories and tags

- 🎨 **Modern UI/UX**
  - Responsive design for all devices
  - Clean and intuitive interface
  - Dark/Light mode support
  - Loading states and error handling

- 🚀 **Performance**
  - Optimized build process
  - Lazy loading components
  - Efficient API calls

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios for API calls
- React Hook Form
- React Quill (Rich Text Editor)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- CORS enabled

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (for production)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blog-website.git
   cd blog-app
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your configuration
   ```

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Update .env with your API URL
   ```

4. **Start the development servers**
   ```bash
   # In the backend directory
   npm run dev
   
   # In a new terminal, in the frontend directory
   npm run dev
   ```

## 🔧 Configuration

### Backend (`.env`)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
PORT=5000
NODE_ENV=development
```

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Deployment

### Vercel (Recommended)

#### Frontend
1. Push your code to GitHub
2. Import the frontend project to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

#### Backend
1. Push your code to GitHub
2. Import the backend project to Vercel
3. Set environment variables in Vercel dashboard
4. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Deploy

### Environment Variables

#### Frontend
- `VITE_API_URL`: Your deployed backend URL (e.g., `https://your-backend.vercel.app/api`)

#### Backend
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure secret for JWT token generation
- `NODE_ENV`: Set to `production` for production

## 📝 Project Structure

```
blog-app/
├── backend/               # Backend server
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── server.js         # Entry point
│   └── .env.example      # Environment variables example
│
└── frontend/             # Frontend React app
    ├── public/           # Static files
    └── src/
        ├── assets/       # Images, fonts, etc.
        ├── components/   # Reusable components
        ├── pages/        # Page components
        ├── styles/       # Global styles
        ├── App.jsx       # Main App component
        └── main.jsx      # Entry point
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icons
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for the free tier database

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/blog-website](https://github.com/yourusername/blog-website)

# 📝 MERN Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates best practices in deployment, environment configuration, CI/CD, and monitoring.

---

## 🚀 Features

- User authentication (JWT)
- Create, read, update, and delete blog posts
- User-specific and public post feeds
- Responsive React frontend
- Secure Express.js backend
- MongoDB Atlas cloud database
- Production-ready configuration and deployment

---

## 📦 Project Structure


/client         # React frontend
/server         # Express backend
  /controllers
  /middleware
  /models
  /routes
  .env
  app.js
  ...
/Week7-Assignment.md



## ⚙️ Environment Variables

Create a `.env` file in `/server` with the following:

PORT=5000
MONGODB_URI=mongodb+srv://kintunde2010:fosD2331zoSkY7G5@cluster0.w3o8uhl.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=3eb5667570dfd703ba4022392e6271f4db9dc456f36c7e15c51ebc7545ff7c889bf8f39c9a5de89b24e48fe97853e8ea78a8c00d73b6fe1ce85ce3685d64bd67



---

## 🛠️ Setup & Installation

### 1. Clone the repository

```sh
git clone https://github.com/Omomayorwah/blog-app.git
cd your-repo
```

### 2. Install dependencies

```sh
cd server
npm install
cd ../client
npm install
```

### 3. Configure environment variables

- Copy `.env.example` to `.env` in `/server` and fill in your values.

### 4. Run the application locally

**Backend:**
```sh
cd server
npm run dev
```

**Frontend:**
```sh
cd client
npm start
```

---

## 🚀 Deployment

### Backend

- Deploy to [Render](https://render.com), [Railway](https://railway.app), or [Heroku](https://heroku.com).
- Set environment variables in your cloud provider dashboard.
- Example build/start commands:
  - Build: `npm install`
  - Start: `npm start`

### Frontend

- Deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com).
- Set `REACT_APP_API_URL` in your frontend environment variables to your deployed backend URL.

---

## 🔒 Security & Production Readiness

- Uses `helmet` for secure HTTP headers.
- Centralized error handling in Express.
- Logging with `morgan`.
- Environment variables for secrets and configuration.
- MongoDB Atlas with least-privilege user permissions.
- Connection pooling enabled in Mongoose.

---

## 🧪 Testing & CI/CD

- Automated tests and linting via GitHub Actions.
- Continuous deployment configured for both frontend and backend.
- Example workflow files in `.github/workflows/`.

---

## 📊 Monitoring & Maintenance

- Health check endpoints for uptime monitoring.
- Error tracking (e.g., Sentry) can be integrated.
- Regular database backups recommended.
- Monitoring tools (e.g., UptimeRobot, LogRocket) can be added.

---

## 🌐 Live Demo

- **Frontend:** [https://blog-app-seven-sooty-78.vercel.app/]
- **Backend API:** [https://myblog-wmg7.onrender.com/api]

---

## 📄 License

MIT

---

## 🙏 Acknowledgements

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Render](https://render.com)
- [Vercel](https://vercel.com)
- [React](https://react.dev)
- [Express](https://expressjs.com)
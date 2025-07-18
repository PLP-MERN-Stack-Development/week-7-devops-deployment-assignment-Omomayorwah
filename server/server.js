require("dotenv").config();
const express = require("express");
import { static as expressStatic } from 'express';
const http = require("http");
const cors = require("cors");
const connectDB = require("./config/db");
const { Server } = require("socket.io");
import { join } from 'path';
const helmet = require('helmet');
const morgan = require('morgan');

// Import routes
import postRoutes from './routes/posts';
import categoryRoutes from './routes/categories';
import authRoutes from './routes/auth';

// Load environment variables
config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: { origin: "*" }
});


// Socket.IO
require('./socket')(io);

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/uploads', expressStatic(join(__dirname, 'uploads')));
app.use(helmet());
app.use(morgan('combined'));

// Log requests in development mode
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

// Root route
app.get('/', (req, res) => {
  res.send('MERN Blog API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// DB & Start
connectDB();
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  // Close server & exit process
  process.exit(1);
});

export default app;
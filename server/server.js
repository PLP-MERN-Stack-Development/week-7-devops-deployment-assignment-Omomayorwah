import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import { static as expressStatic } from "express";
import http from "http";
import cors from "cors";
import connectDB from "./config/db.js";
import { Server } from "socket.io";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import morgan from "morgan";

// Import routes
import postRoutes from './routes/posts.js';
import categoryRoutes from './routes/categories.js';
import authRoutes from './routes/auth.js';
import roomRoutes from "./routes/roomRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import socketHandler from './socket/index.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

const allowedOrigins = [
  'http://localhost:3000', 'https://blog-app-seven-sooty-78.vercel.app/'
];

// Socket.IO
socketHandler(io);

// Middleware
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));
  
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
app.use("/api/rooms", roomRoutes);
app.use("/api/messages", messageRoutes);

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
server.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

export default app;
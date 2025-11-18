import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  register,
  login,
  refresh,
  logout,
  protectedRoute,
} from "./controllers/authController.js";
import { verifyAccessToken } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// configure CORS - allow your frontend domains
const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://project-one-nrgc-git-main-carlos-projects-9a0e3e2a.vercel.app/",
  "http://localhost:5173",
  "https://projectone-q11o.onrender.com"
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error("CORS not allowed"));
  },
  credentials: true,
}));

mongoose.connect(process.env.MONGO_URL, { dbName: "kimuyu_db" })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Auth routes
app.post("/api/register", register);
app.post("/api/login", login);
app.get("/api/refresh", refresh);
app.post("/api/logout", logout);

// protected
app.get("/api/protected", verifyAccessToken, protectedRoute);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

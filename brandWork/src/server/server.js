import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import User from "./userModel.js";

const app = express();
const SECRET_KEY = "KimuyuLoveSecure7755.Key2025#Auth";

// ===== Middleware =====
app.use(cors());
app.use(express.json({
  verify: (req, res, buf, encoding) => {
    try {
      JSON.parse(buf);
    } catch (err) {
      res.status(400).json({
        error: "Invalid JSON format",
        details: err.message,
        received: buf.toString(),
      });
      throw err;
    }
  }
}));

// ===== MongoDB Connection =====
mongoose.connect(
  "mongodb+srv://-------------------------------------------------------
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

// ===== JWT Auth Middleware =====
const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(403).json({ message: "No token provided" });
  const token = auth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// ===== Routes =====

// Registration
app.post("/api/register", async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword)
      return res.status(400).json({ message: "All fields required" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashed });
    await user.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      SECRET_KEY,
      { expiresIn: "2h" }
    );

    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Protected route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({
    message: "Access granted",
    user: req.user,
  });
});

// ===== Start Server =====
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

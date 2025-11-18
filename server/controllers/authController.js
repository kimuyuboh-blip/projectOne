import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateTokens } from "../utils/generateTokens.js";
import jwt from "jsonwebtoken";

const cookieOptions = (req) => ({
  httpOnly: true,
  secure: req.hostname !== "localhost", // true in production
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
});

export const register = async (req, res) => {
  try {
    const { name = "", email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing email or password" });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already in use" });

    // You can add password strength checks here
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json({ message: "User registered", user: { id: user._id, email: user.email }});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Missing email or password" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user._id.toString(), email: user.email };
    const { accessToken, refreshToken } = generateTokens(payload);

    // set refresh token cookie
    res.cookie("refresh_token", refreshToken, cookieOptions(req));
    return res.json({ accessToken, user: payload });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const refresh = (req, res) => {
  try {
    const token = req.cookies?.refresh_token;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const payload = { id: decoded.id, email: decoded.email };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.ACCESS_EXPIRES || "15m" });

    return res.json({ accessToken });
  } catch (err) {
    console.error(err);
    return res.status(403).json({ message: "Invalid refresh token" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("refresh_token", { httpOnly: true, sameSite: "none", secure: req.hostname !== "localhost" });
  return res.json({ message: "Logged out" });
};

export const protectedRoute = (req, res) => {
  return res.json({ message: "Access granted", user: req.user });
};

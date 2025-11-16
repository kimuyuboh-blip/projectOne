import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import User from "./userModel.js";

const app = express();
const SECRET_KEY = "KimuyuLoveSecure7755.Key2025#Auth";
const router = express.Router();

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
  "mongodb+srv://kimuyuboh_db_user:Love7755.@cluster0.uwybmsp.mongodb.net/",
)
.then(() => console.log(" Connected to MongoDB Atlas"))
.catch(err => console.error(" MongoDB connection error:", err));


// ===== JWT Auth Middleware =====
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) 
    return res.status(403).json({ message: "No token provided" }
  );

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Mount the router with /api prefix
app.use('/api', router);  


// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.json({ messege: 'User registered successfully'});
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ Id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '900s' });
    res.json({ token, name: user.name });
});


// protected route
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Access granted', user: req.user });
});


// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
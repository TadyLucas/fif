const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const authenticateToken = require("./middleware/authMiddleware");

const app = express();
require('dotenv').config();  // Load environment variables from the .env file

const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI).then(() => console.log("Connected to MongoDB"));

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/authdb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error: ", error));

// Define the User model
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  })
);

app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { email, username, password, rePassword } = req.body;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (password !== rePassword)
    return res.status(400).json({ message: "Passwords do not match" });
  if (emailRegex.test(email) === false)
    return res.status(400).json({ message: "Invalid email format" });
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = new User({ email, username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user }); // Send the user object as well
  } catch (err) {
    console.error("Registration error:", err); // Log the error for debugging
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message }); // Provide more context on the error
  }
});
app.post("/login", async (req, res) => {
  const { usrOrEmail, password } = req.body;

  const user = await User.findOne({
    $or: [{ email: usrOrEmail }, { username: usrOrEmail }],
  });
  if (!user) return res.status(400).send("User not found");
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).send("Invalid password");

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});
app.get("/dashboard", authenticateToken, (req, res) => {
  res.sendStatus(200);
});

const settingsRouter = require("./router/settings");

app.use("/settings", settingsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

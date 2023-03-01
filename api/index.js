const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const cors = require("cors");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = `${process.env.JWT_SECRET_KEY}`;

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username: username, password });
    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).status(201).json({
        id: createdUser._id,
      });
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json(error);
  }
});

app.listen(4040);

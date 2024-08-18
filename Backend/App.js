const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router);

// MongoDB connection
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb+srv://kavigayashan149:MoRuenY7GsXrbkUZ@cluster0.fafkutn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));

// Register Model

require("./Model/Register");
const User = mongoose.model("Register");

// Registration route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create a new user without password hashing
    await User.create({
      name,
      email,
      password,
    });

    res.send({ status: "ok" });
  } catch (err) {
    res.send({ status: "error", message: err.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ error: "User Not Found" });
    }

    // Check if the password matches (no hashing, plain text comparison)
    if (user.password === password) {
      return res.send({ status: "ok" });
    } else {
      return res.json({ status: "Incorrect Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

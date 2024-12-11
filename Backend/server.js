const express = require("express");
const connectDb = require("./lib/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./Routes/index");
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// Routes
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 5000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

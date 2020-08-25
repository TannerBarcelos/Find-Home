const express = require("express");
const app = express();
require("dotenv").config();

// router import
const zillowRouter = require("./controllers/api");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router middleware for all the zillow city routes - routes will be prefixed by /api
app.use("/api", zillowRouter);

// Main route
app.get("/", (req, res) => {
  res.send("hello, world");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`Server running on port: ${PORT}`));

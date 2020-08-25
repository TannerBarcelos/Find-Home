const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  res.json({ msg: "Zillow API is not what i need" });
});

module.exports = router;

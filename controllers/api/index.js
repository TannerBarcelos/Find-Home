const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/:movies", (req, res) => {
  const { movies } = req.params;
  res.json({ msg: movies });
});

module.exports = router;

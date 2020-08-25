const express = require("express");
const router = express.Router();

/**
 * @returns apartment listings by city wildcard
 */
router.get("/:city_name", (req, res) => {
  // Pull out the city that was requested -> in react we will need to use match ?
  const { city_name } = req.params;
  res.json({ msg: `${city_name}` });
});

module.exports = router;

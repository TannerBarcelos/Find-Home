const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require("dotenv").config();

// cache each new request so that we can save time for the client when trying to submit duplicate requests
const cache = {};

// gets ALL movies from given search at tmbd API
router.get("/:movies", async (req, res) => {
  // pull out the movie search term
  const { movies } = req.params;

  // grab API key from env vars
  const API_KEY = process.env.TMBD_API_KEY;

  // check the cache for an existing search for this query - if it does not exist, send the request
  if (cache[movies]) {
    return res.status(200).json(cache[movies]);
  } else {
    try {
      // Perform the request - returns JSON
      const movielist = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movies}`
      );
      // convert to json
      const data = await movielist.json();
      // cache
      cache[movies] = data;
      //console.log(data.results); // remove .results to get total pages when adding pagination
      // return
      return res.status(200).json(data);
    } catch (error) {
      return console.log(error);
    }
  }
});

// will use the movie_id endpoint for imdb and get a spceific movie data - this will probably be used when clicking a particular movie in the UI and linking to a new page
// with a large synopsis
router.get("/:movie_id", (req, res) => {
  res.send("hello from movie particular route");
});

module.exports = router;

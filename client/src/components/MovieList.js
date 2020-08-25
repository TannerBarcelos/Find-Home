import React from "react";

import { CardGroup, Card } from "reactstrap";

// card
import MovieCard from "./MovieCard";

function MovieList({ movieData }) {
  console.log(movieData);
  return !movieData ? (
    ""
  ) : (
    <CardGroup>
      <MovieCard id={1} />
    </CardGroup>
  );
}

export default MovieList;

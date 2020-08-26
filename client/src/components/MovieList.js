import React from "react";

import { CardGroup, Card } from "reactstrap";

// card
import MovieCard from "./MovieCard";

function MovieList({ movieList }) {
  return !movieList ? null : (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {movieList.map(({ id, title, vote_average, poster_path, overview }) => {
        return (
          <MovieCard
            key={id}
            id={id}
            title={title}
            vote_average={vote_average}
            poster_path={poster_path}
            overview={overview}
          />
        );
      })}
    </div>
  );
}

export default MovieList;

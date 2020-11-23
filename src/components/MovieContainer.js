import React from "react";
import Movie from "./Movie";
import "./Movie_container.css";

function MovieContainer({ movies }) {
  return (
    <div className="container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default MovieContainer;

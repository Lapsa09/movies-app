import React from "react";
import "./Movie.css";

const images = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, overview, vote_average }) {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? images + poster_path
            : "https://store-images.s-microsoft.com/image/apps.24800.13859945615656852.1937c11a-3504-43cf-8a7c-023e7fa623b3.dc5e4d67-935e-4c4b-b128-66cd6194afee?mode=scale&q=90&h=300&w=300"
        }
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`rate ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;

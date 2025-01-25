import React from 'react';
import "./style.css";

function MoviePoster({ poster }) {
  return (
    <div className="movie-poster">
      <img src={poster} alt="Movie Poster" />
    </div>
  );
}

export default MoviePoster;

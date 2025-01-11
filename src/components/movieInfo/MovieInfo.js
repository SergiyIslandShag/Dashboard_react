import React from 'react';
import MoviePoster from './MoviePoster';
import MovieDetails from './MovieDetails';
import "./style.css";

function MovieInfo() {
  const movie = {
    title: "Вовк з Уолл-стріт",
    director: "Мартін Скорсезе",
    year: 2013,
    studio: "Paramount Pictures",
    poster: "https://uaserial.com/images/serials/64/640b4fe1479c7467650245.webp",
  };

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <MoviePoster poster={movie.poster} />
      <MovieDetails
        director={movie.director}
        year={movie.year}
        studio={movie.studio}
      />
    </div>
  );
}

export default MovieInfo;

import React from 'react';
import "./style.css";

function MovieDetails({ director, year, studio }) {
  return (
    <div className="movie-details">
      <h3>Режисер: {director}</h3>
      <p>Рік випуску: {year}</p>
      <p>Кіностудія: {studio}</p>
    </div>
  );
}

export default MovieDetails;

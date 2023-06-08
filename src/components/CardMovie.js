import React from "react";
import { Link } from 'react-router-dom'
const CardMovie = ({ mov }) => {
  return (
    <div className="col-12 col-md-4 my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} className="card__image" alt="Movie Item" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>Movie Name:{mov.title}</p>
              <p>Release Date : {mov.release_date}</p>
              <p>Vote :  {mov.vote_count }</p>
              <p>Rate: {mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </div >
  );
};

export default CardMovie;

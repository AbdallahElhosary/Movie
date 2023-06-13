import React from "react";
import { Link } from 'react-router-dom'
import "./CardMovie.css"
import { AiFillStar } from "react-icons/ai";
const CardMovie = ({ mov }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3 my-1">
      <Link to={`/movie/${mov.id}`} className="card-link">
        <div className="card-item">
          <img src={`https://image.tmdb.org/t/p/w500/`+ mov.poster_path} className="card__image" alt="Movie Item" />
          <div className="card__overlay">
            <div className="overlay__text  w-100">
              <p className="name">{mov.title}</p>
              <div className="d-flex align-items-center">
                <AiFillStar className="second"/>
                <p className="fourth rate">{mov.vote_average} </p>
                <p className="fourth date">{mov.release_date}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div >
  );
};

export default CardMovie;

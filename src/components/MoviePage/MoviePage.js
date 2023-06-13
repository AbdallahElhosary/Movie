import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./MoviePage.css"
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
function MoviePage() {
    const param = useParams();
    const [movie, setMovie] = useState([])

    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1f19f83b65c26b7010541b6da90b5bf0&language=en-US`)
        setMovie(res.data)
    }
    useEffect(() => {
        getMovieDetails();
    }, [])
    return (
        <div className='text-white'>
            <div className='row mt-4 mb-4'>
                <div className='col-md-4 col-12 mb-3'>
                    <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} loading="lazy" className="card__image w-100 mb-2" alt="Movie Item" />
                </div>
                <div className='col-md-8 col-12'>
                    <h3 className='mx-1'> {movie.original_title}</h3>
                    <div className="movieDetails">
                        <AiFillStar className="second" />
                        <span className='fourth item'>{(movie.vote_average * 10).toFixed(2)}%</span>
                        <span className='fourth item'> {movie.release_date}</span>
                    </div>
                    <div className='row my-3'>
                        <div className="col-12 fs-4">
                            {movie.overview}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 d-flex justify-content-between my-2">
                            <Link className='btn-page' to={movie.homepage} >
                                Watch
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </Link>
                            <Link className='btn-page' to="/" >
                                Home
                                <div className="arrow-wrapper">
                                    <div className="arrow"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage

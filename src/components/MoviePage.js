import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
function MoviePage() {
    const naviagte = useNavigate();
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
                <div className='col-md-6 col-12 mb-3'>
                    <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} className="card__image w-100 mb-2" alt="Movie Item" />
                </div>
                <div className='col-md-6 col-12'>
                    <div className='d-flex fs-4 align-items-center'>
                        <span>Name :</span>
                        <span className='text-info mx-1'> {movie.original_title}</span>
                    </div>
                    <div className='d-flex fs-4 align-items-center'>
                        <span>Release Date :</span>
                        <span className='text-info mx-1'> {movie.release_date}</span>
                    </div>
                    <div className='d-flex fs-4 align-items-center'>
                        <span>Vote Count :</span>
                        <span className='text-info mx-1'> {movie.vote_count}</span>
                    </div>
                    <div className='d-flex fs-4 align-items-center'>
                        <span>vote Average :</span>
                        <span className='text-info mx-1'> {movie.vote_average}</span>
                    </div>
                </div>
            </div>
            <h4 className='text-success fs-2'>Story</h4>
            <div className='row'>
                <div className="col-12 text-info fs-3">
                    {movie.overview}
                </div>
            </div>
            <div className='row'>
                <div className="col-12 d-flex justify-content-between my-2">
                    <Link className='btn-page w-25' to={movie.homepage} >
                        Watch
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </Link>
                    <Link className='btn-page w-25' to="/" >
                        Home
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MoviePage
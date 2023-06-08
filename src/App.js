import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import {Routes, Route } from 'react-router-dom'
import './App.css';
import MoviePage from './components/MoviePage';

function App() {
  const [movies, setMovies] = useState([]);

  //get all movies by axios 
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1f19f83b65c26b7010541b6da90b5bf0&language=en/US")
    setTimeout(() => {
      setMovies(res.data.results)
    }, 1000)
  }

  useEffect(() => {
    getAllMovies();
  }, [])
  // Function to handle search by word
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    }
    else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1f19f83b65c26b7010541b6da90b5bf0&query=${word}&language=en-Us`)
      setTimeout(() => {
        setMovies(res.data.results)
      }, 2000)
    }
  }
  // Function to handle the change on pagination
  const paginateFun =async (url) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1f19f83b65c26b7010541b6da90b5bf0&language=en/US&page=${url}`)
      setTimeout(() => {
        setMovies(res.data.results)

      }, 2000)
      
  }

  return (
    <div className="font color-body ">
      <NavBar search={search} />
      <div className='container'>
        <Routes>
          <Route path="/" element={<MoviesList movies={movies} paginateFun={paginateFun} />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;

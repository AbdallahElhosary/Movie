import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie/CardMovie";
import Loading from "./Loading";
import PaginationFun from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getTheWholeMovies } from "../redux/action/movieAction";
const MoviesList = ({ paginateFun  }) => {

    const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const moviesData = useSelector(state => state.movies);
  // Dispatch the whole movies
  useEffect(() => {
    dispatch(getTheWholeMovies())
  }, [])

// useEffect to change the movies when movies data changes
  useEffect(() => {
      setMovies(moviesData);
  }, [moviesData])

  return (
    <div className="container">
      <Row className="mt-3 w-100">
      {
        movies.length > 0 ? (
          movies.map((mov) => {
            return (
              <CardMovie mov={mov} key={mov.id} />
            )
          })
        ):<Loading />
      }
      
        <PaginationFun paginateFun={paginateFun} />
    </Row>
    </div>
  );
};

export default MoviesList;

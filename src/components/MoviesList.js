import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Loading from "./Loading";
import PaginationFun from "./Pagination";
const MoviesList = ({ movies,paginateFun  }) => {
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

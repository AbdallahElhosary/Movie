import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Navbar.css";
import { useDispatch } from 'react-redux';
import { getSearchedMovies, getTheWholeMovies } from "../../redux/action/movieAction";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"


const NavBar = () => {
  const dispatch = useDispatch();


  // Function to handle search by word
  const search = async (word) => {
    if (word === "") {
      dispatch(getTheWholeMovies())
    }
    else {
      dispatch(getSearchedMovies(word))
    }
  }
  return (
    <div className="nav-style w-100 first-bg">
      <Container>
        <Row>
          <Col xs="4" lg="2">
            <Link to="/" className="logo second">
              movies
            </Link>
          </Col>
          <Col xs="8" lg="9" className=" d-flex align-items-center">
            <div className="search d-flex fourth-bg">
              <input onChange={(e) => search(e.target.value)} type="text" className="search-btn" placeholder="Search.."  />
              <AiOutlineSearch />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;

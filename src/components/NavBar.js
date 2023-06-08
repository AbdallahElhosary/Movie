import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import logo from '../images/logo.png'
const NavBar = ({ search }) => {

  const onSearch = (word) => {
    search(word)
  }
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
<<<<<<< HEAD
          <Col xs="9" lg="11" className=" d-flex align-items-center">
=======
          <Col xs="8" lg="11" className=" d-flex align-items-center">
>>>>>>> 423ee2048e9c728165276af033e0b0ceb597c23b
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;

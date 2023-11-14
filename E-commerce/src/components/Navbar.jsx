import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Cartwidget } from "./Cartwidget";

export const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Navbar bg="dark" variant="dark" className="navbar-dark">
      <Container>
        <Navbar.Brand href="/">Electro-Land</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            to="/category/Electronica"
            className="nav-link"
            onClick={() => handleCategoryClick("Electronica")}
          >
            Electronica
          </NavLink>
          <NavLink
            to="/category/Celulares"
            className="nav-link"
            onClick={() => handleCategoryClick("Celulares")}
          >
            Celulares
          </NavLink>
          <NavLink
            to="/category/Consolas"
            className="nav-link"
            onClick={() => handleCategoryClick("Consolas")}
          >
            Consolas
          </NavLink>
          <NavLink
            to="/category/Notebooks"
            className="nav-link"
            onClick={() => handleCategoryClick("Notebooks")}
          >
            Notebooks
          </NavLink>
        </Nav>
        <Cartwidget />
      </Container>
    </Navbar>
  );
};
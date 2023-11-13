import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import { Cartwidget } from "./Cartwidget";

export const CustomNavbar = () => {
  // Estilos personalizados para los enlaces
  const linkStyle = {
    marginRight: "115px", // Espacio entre enlaces ajustado a 15px
    fontFamily: "Arial, sans-serif", // Cambio de fuente
    fontSize: "16px", // Tamaño de fuente
    color: "#fff", // Color del texto
    textDecoration: "none", // Sin subrayado
    transition: "color 0.3s", // Transición suave de color
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Electro-Land</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="/category/Electronica" className="nav-link" style={linkStyle}>
            Electronica
          </NavLink>
          <NavLink to="/category/Celulares" className="nav-link" style={linkStyle}>
            Celulares
          </NavLink>
          <NavLink to="/category/Consolas" className="nav-link" style={linkStyle}>
            Consolas
          </NavLink>
          <NavLink to="/category/Notebooks" className="nav-link" style={linkStyle}>
            Notebooks
          </NavLink>
        </Nav>
        <Cartwidget />
      </Container>
    </Navbar>
  );
};

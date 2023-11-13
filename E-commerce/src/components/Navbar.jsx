import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar"; 

import { Cartwidget} from "./Cartwidget"; 

export const NavBar = () => {
  return (
    <Navbar bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="/">Electro-Land</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink  to="/category/Electronica">
            Electronica
          </NavLink>
          <NavLink  to="/category/Celulares">
            Celulares
          </NavLink>
          <NavLink  to="/category/Consolas">
            Consolas
          </NavLink>
          <NavLink to="/category/Notebooks">
            Notebooks
          </NavLink>
        </Nav>
        <Cartwidget />
      </Container>
    </Navbar>
  );
};


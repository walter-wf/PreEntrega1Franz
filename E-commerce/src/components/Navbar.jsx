
import "bootstrap/dist/css/bootstrap.css";
import { Cartwidget } from "./Cartwidget";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-center">
        <a className="navbar-brand" href="/">
          ElectroLand
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/electronica">
              Electronica
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/computadoras">
              Computadoras
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/celulares">
              Celulares
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/consolas">
              Consolas
            </a>
          </li>
        </ul>
        <Cartwidget />
      </div>
    </nav>
  );
};


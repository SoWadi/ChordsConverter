import React from "react";
import { Link } from "react-router-dom";

/* import { NavDropdown } from "react-bootstrap"; */
/* import "../../../src/components/inc/Navbar.css"; */
import "../../../src/App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg"  id="upPage">
      <div className="container containerNav">
        {/* <a className="" href="/">
          Navbar
        </a> */}
        {/*         <div>
          <Link to="/" className="navbar-brand">
            <img className="LogoNav" src={LogoNav} alt="Reactiserv"></img>
          </Link>
        </div> */}
                <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mx-auto mb-lg-0">
            <li className="nav-item navLink">
              <Link to="/home" className="nav-link active">
                Accueil
              </Link>
            </li>

            {/* 

            <NavDropdown
              className="border border-0"
              title="Nos solutions"
              id="basic-nav-dropdown"
              >
              <NavDropdown.Item href="#service2">
                <Link
                  to="/formations"
                  className="nav-link active"
                  >
                  Formations commerciales
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/strategie-commerciale" className="nav-link active">
                  Stratégie commerciale
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link to="/service-administratif" className="nav-link active text-danger">
                  Assistanat administratif
                </Link>
              </NavDropdown.Item>

            </NavDropdown>
            </div> 
*/}

            <li className="nav-item">
              <Link to="/converter" className="nav-link active">
                Converter
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/about" className="nav-link active">
                À propos
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/tunes" className="nav-link active">
                Random Tunes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

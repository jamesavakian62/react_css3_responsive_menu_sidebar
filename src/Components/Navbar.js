import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink to="/">
            <h4 className="logo">James L. Avakian</h4>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink to="/" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">Home</li>
              </NavLink>

              <NavLink to="/about" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">About</li>
              </NavLink>

              <NavLink to="/contact" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">Contact</li>
              </NavLink>

              <NavLink to="/services" activeClassName="active_styles" exact>
                <li className="nav-item nav-link">Services</li>
              </NavLink>

              <NavLink to="/software" activeClassName="active_styles" exact>
                <li class="nav-item nav-link">Software</li>
              </NavLink>

              <NavLink to="/aboutme" activeClassName="active_styles" exact>
                <li className="nav-item nav-link">About Me</li>
              </NavLink>
            </ul>
            <form class="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

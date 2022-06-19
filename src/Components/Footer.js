import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div class="card text-center">
      <div class="card-body bg-dark text-light py-4">
        <h1 class="card-title">James L. Avakian, Software Developer</h1>
        <h3 class="card-title">Made with ReactJS / CSS3</h3>
        <p class="card-text">
          &copy; 2022, James L. Avakian, Optical Automation, LLC, All rights
          reserved.
        </p>

        <NavLink to="/">
          <button className="btn btn-primary">Home Page</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;

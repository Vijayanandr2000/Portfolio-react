import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a class="navbar-brand mr-5" href="#">
          <h1>VIJAYANAND</h1>
        </a>
        <button
          class="navbar-toggler mr-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon  "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#about">
                about
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#education">
                Education
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#skill">
                skills
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link " href="#project">
                projects
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link " href="#contact">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

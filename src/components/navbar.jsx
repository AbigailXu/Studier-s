import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="main-nav navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Studier's
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarLeft">
          <div className="navbar-nav ms-2 d-flex">
            <NavLink className="nav-link" to="/tasks/main">
              Tasks
            </NavLink>
            <NavLink className="nav-link" to="/cites">
              Cites
            </NavLink>
            <NavLink className="nav-link" to="/music">
              Music
            </NavLink>
          </div>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarRight"
        >
          <div className="navbar-nav ms-2 d-flex">
            <NavLink
              className="nav-link login"
              to="/login"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Login"
            >
              <i className="fa fa-sign-in"></i>
            </NavLink>
            <NavLink
              className="nav-link register"
              to="/register"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Register"
            >
              <i className="fa fa-user-plus"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

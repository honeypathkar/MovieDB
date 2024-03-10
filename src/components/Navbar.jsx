import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand px-3 fs-4"
            to="/"
            style={{
              fontFamily: "'Philosopher', sans-serif",
              fontWeight: "400",
            }}>
            MovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movie">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/series">
                  Web Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item d-flex">
                  <p
                    className={`text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'} &nbsp; &nbsp;
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className={`form-check-input ${props.mode === 'dark' ? 'active' : ''}`}
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      onClick={props.toggleMode}
                    />
                  </div>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand px-3 fs-4"
            to="/"
            style={{
              fontFamily: "'Philosopher', sans-serif",
              fontWeight: "400",
            }}
          >
            MovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark "
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className={`offcanvas-header bg-${props.mode}`}>
              <h5
                className={`offcanvas-title fs-4 text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                id="offcanvasDarkNavbarLabel"
                style={{ fontFamily: "'Philosopher', sans-serif" }}
              >
                MovieDB
              </h5>
              <button
                type="button"
                className={`btn-close btn-close-${
                  props.mode === "light" ? "black" : "white"
                }`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={`offcanvas-body bg-${props.mode}`}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/series">
                    Web Series
                  </Link>
                </li>
                <li className="nav-item d-flex">
                  <p
                    className={`text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    Dark Mode &nbsp; &nbsp;
                  </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      onClick={props.toggleMode}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
     
    </div>
  );
}

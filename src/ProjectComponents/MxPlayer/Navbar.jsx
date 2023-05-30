import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Mx Player
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.mxplayer.in/web-series"
                  target="_blank"
                >
                  WebSeries
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://www.mxplayer.in/music"
                  target="_blank"
                >
                  Music
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/favourite"
                  className="nav-link "
                  aria-current="page"
                  href="#"
                >
                  Favourite
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies Here"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={props.InputData}
                value={props.searchData}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

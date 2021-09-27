import React from "react";
import introImage from "../../images/intro.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fs-4" href="/">
          AthenaSpeakers
          </a>
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
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                 About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                 Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row py-5">
          <div className="col d-flex justify-content-center flex-column">
            <h1 className="">Top Motivational Speakers</h1>
            <h5>
              We've ranked the top motivational speakers from around the world,
              based on popularity.
            </h5>
          </div>
          <div className="col">
            <img className="header-img" src={introImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

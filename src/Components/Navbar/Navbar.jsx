import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4 position-fixed w-100 z-3">
        <div className="container">
          <Link className="navbar-brand text-uppercase fw-bolder fs-2" to="">
            START FRAMEWORK
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
            <ul className="navbar-nav ms-auto gap-4 my-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(x) =>
                    x.isActive === true
                      ? "nav-link text-uppercase fw-bold rounded-3 p-2 active"
                      : "nav-link text-uppercase fw-bold"
                  }
                  aria-current="page"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(x) =>
                    x.isActive === true
                      ? "nav-link text-uppercase fw-bold rounded-3 p-2 active"
                      : "nav-link text-uppercase fw-bold"
                  }
                  to="portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(x) =>
                    x.isActive === true
                      ? "nav-link text-uppercase fw-bold rounded-3 p-2 active"
                      : "nav-link text-uppercase fw-bold"
                  }
                  to="contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

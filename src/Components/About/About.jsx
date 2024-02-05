import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="container text-center component-padding">
          <h2 className="text-uppercase text-white fw-bolder fs-1 mb-4">
            about component
          </h2>

          <p className="home-icon d-flex align-items-center justify-content-center gap-2">
            <span className="line"></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className="line"></span>
          </p>

          <div className="row text-start text-white mt-5">
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

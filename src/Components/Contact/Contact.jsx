import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2 className="text-center text-uppercase fw-bold component-heading mb-4">
          contact section
        </h2>

        <p className="home-icon d-flex align-items-center justify-content-center gap-2">
          <span className="portfolio-line line"></span>
          <i className="fa-solid fa-star"></i>
          <span className="portfolio-line line"></span>
        </p>

        <div className="container">
          <div className="wrapper mx-auto">
            <form className="d-flex flex-column gap-5">
              <div className="input-data">
                <input
                  type="text"
                  id="userName"
                  className="contact-input"
                  required
                />
                <label htmlFor="userName">Name</label>
                <div className="underline"></div>
              </div>
              <div className="input-data">
                <input
                  type="number"
                  id="userAge"
                  className="contact-input"
                  required
                />
                <label htmlFor="userAge">Age</label>
                <div className="underline"></div>
              </div>
              <div className="input-data">
                <input
                  type="email"
                  id="userEmail"
                  className="contact-input"
                  required
                />
                <label htmlFor="userEmail">Email</label>
                <div className="underline"></div>
              </div>
              <div className="input-data">
                <input
                  type="password"
                  id="userPassword"
                  className="contact-input"
                  required
                />
                <label htmlFor="userPassword">Password</label>
                <div className="underline"></div>
              </div>
            </form>
              <button className="btn text-capitalize text-white mt-4 contact-btn d-inline">send message</button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-details p-5">
        <div className="row">
          <div className="col-md-4">
            <div className="details-box text-center">
              <h3 className="text-white text-uppercase fw-bold mb-3">
                location
              </h3>
              <p className="text-white mb-3">2215 John Daniel Drive</p>
              <p className="text-white">Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="details-box text-center">
              <h3 className="text-white text-uppercase fw-bold mb-3">
                around the web
              </h3>
              <div className="footer-icons d-flex align-items-center justify-content-center gap-3">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="details-box text-center">
              <h3 className="text-white text-uppercase fw-bold mb-3">
                around freelance
              </h3>
              <p className="text-white">
                Freelance is a free to use, licensed Bootstrap theme <br />{" "}
                created by Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content p-4">
        <p className="text-center text-white mb-0">
          Copyright &copy; Your Website 2021
        </p>
      </div>
    </>
  );
}

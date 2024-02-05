import React from "react";
import "./Portfolio.css";

import img1 from "../../assets/portfolio component/poert1.png";
import img2 from "../../assets/portfolio component/port2.png";
import img3 from "../../assets/portfolio component/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h2 className="text-center text-uppercase fw-bold component-heading mb-4">
          portfolio component
        </h2>

        <p className="home-icon d-flex align-items-center justify-content-center gap-2">
          <span className="portfolio-line line"></span>
          <i className="fa-solid fa-star"></i>
          <span className="portfolio-line line"></span>
        </p>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <div
                className="item rounded-3 overflow-hidden position-relative"
                data-bs-target="#img1"
                data-bs-toggle="modal"
              >
                <img src={img1} alt="" className="w-100" />

                <div className="item-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white overlay-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item rounded-3 overflow-hidden position-relative"
                data-bs-target="#img2"
                data-bs-toggle="modal"
              >
                <img src={img2} alt="" className="w-100" />

                <div className="item-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white overlay-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item rounded-3 overflow-hidden position-relative"
                data-bs-target="#img3"
                data-bs-toggle="modal"
              >
                <img src={img3} alt="" className="w-100" />

                <div className="item-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white overlay-icon"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="item rounded-3 overflow-hidden position-relative"
                data-bs-target="#img1"
                data-bs-toggle="modal"
              >
                <img src={img1} alt="" className="w-100" />

                <div className="item-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white overlay-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item rounded-3 overflow-hidden position-relative"
                data-bs-target="#img2"
                data-bs-toggle="modal"
              >
                <img src={img2} alt="" className="w-100" />

                <div className="item-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white overlay-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="item rounded-3 overflow-hidden position-relative"
                data-bs-target="#img3"
                data-bs-toggle="modal"
              >
                <img src={img3} alt="" className="w-100" />

                <div className="item-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white overlay-icon"></i>
                </div>
              </div>
            </div>

            {/* MODAL for img 1  */}
            <div
              className="modal fade"
              id="img1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg ">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <img src={img1} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL for img 2  */}
            <div
              className="modal fade"
              id="img2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg ">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <img src={img2} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL for img 3  */}
            <div
              className="modal fade"
              id="img3"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg ">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <img src={img3} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

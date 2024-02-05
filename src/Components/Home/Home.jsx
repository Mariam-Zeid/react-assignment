import React from "react";
import "./Home.css";

import avatar from "../../assets/home component/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home-container text-center component-padding ">
        <img src={avatar} alt="user photo" />
        <div className="home-content mt-5">
          <h2 className="text-uppercase text-white fw-bolder fs-2 mb-4">
            start framework
          </h2>
          <p className="home-icon d-flex align-items-center justify-content-center gap-2">
            <span className="line"></span>
            <i className="fa-solid fa-star text-white"></i>
            <span className="line"></span>
          </p>

          <p className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}

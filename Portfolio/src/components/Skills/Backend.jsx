import React from "react";
import jwt from "../../assets/jwt-logo.png";
import mongoose from "../../assets/mongoose-logo.png";
import express from "../../assets/express.png";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-nodejs skills__icon"></i>

            <div>
              <h3 className="skills__name">Node</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <img src={express} />

            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-mongodb skills__icon"></i>

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <img src={mongoose} className="mongoose" />

            <div>
              <h3 className="skills__name">Mongoose</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <img src={jwt} />

            <div>
              <h3 className="skills__name">JWT</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-firebase skills__icon"></i>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;

import React from "react";
import Buttons from "./Buttons";
import Logo from "./Logo";

function UploadCard() {
  return (
    <div className="container1">
      <div className="card">
        <div className="side1">
          <img
            src={require("../img/back2x.png")}
            alt=""
            className="arrow arrowback lg"
          />
          <img
            src={require("../img/back.png")}
            alt=""
            className="arrow arrowback sm"
          />
          <div className="logo1">
            <Logo
              srcLarge={require("../img/icon2x.png")}
              srcSmall={require("../img/icon.png")}
            />
          </div>
          <img
            src={require("../img/forward2x.png")}
            alt=""
            className="arrow arrowfront lg"
          />
          <img
            src={require("../img/forward.png")}
            alt=""
            className="arrow arrowfront sm"
          />
        </div>
        <div className="side2">
          <h1 className="content-heading">Upload your reports</h1>
          <div className="upload-box">
            <img
              src={require("../img/upload2x.png")}
              alt=""
              className="upload-logo"
            />
            <h3>
              Drag and drop to upload <br />
              <span className="upload-text">
                or{" "}
                <a href="#" className="browse-link">
                  browse
                </a>{" "}
                to choose a file
              </span>
            </h3>
          </div>
          <div className="btns1">
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadCard;

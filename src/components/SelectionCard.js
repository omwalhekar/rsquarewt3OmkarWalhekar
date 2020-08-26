import React from "react";
import SelectionBox from "./SelectionBox";
import Buttons from "./Buttons";
import Logo from "./Logo";

function SelectionCard() {
  return (
    <div className="container2">
      <div className="head">
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
        <div className="logo2">
          <Logo
            srcLarge={require("../img/icon22x.png")}
            srcsmall={require("../img/icon2.png")}
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
      <div className="content">
        <h1 className="content-heading">Lorem ipsum dolor sit amet.</h1>
        <div className="main-content">
          <SelectionBox name="check1" content="Lorem ipsum dolor" />
          <SelectionBox name="check2" content="Lorem ipsum dolor" />
          <SelectionBox name="check3" content="Lorem ipsum dolor" />
          <SelectionBox name="check4" content="Lorem ipsum dolor" />
          <SelectionBox name="check5" content="Lorem ipsum dolor" />
          <SelectionBox name="check6" content="Lorem ipsum dolor" />
          <SelectionBox name="check7" content="Lorem ipsum dolor" />
          <SelectionBox name="check8" content="Lorem ipsum dolor" />
          <SelectionBox name="check9" content="Lorem ipsum dolor" />
          <SelectionBox name="check10" content="Lorem ipsum dolor" />
        </div>

        <div className="btns2">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default SelectionCard;

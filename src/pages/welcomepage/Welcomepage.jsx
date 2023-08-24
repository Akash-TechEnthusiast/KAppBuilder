import React from "react";

import welcomepage from "../../images/new13.jpg";
import "./welcomepage.scss";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const WelcomePage = () => {
  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={welcomepage} alt="Image" />
        {/**  <IconButton className="icon-button">
          <ArrowForwardIosIcon />
        </IconButton>  */}
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;


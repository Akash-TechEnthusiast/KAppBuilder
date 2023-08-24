import React from "react";

import welcomepage from "../../images/new13.jpg";
import "./template.scss";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IndustryList from "../../components/Industrylist/IndustryList";

const Template = () => {
  return (
    <div className="template-container">
      <div className="template-wrapper">
        <div className="template">
          <div className="left">
            <IndustryList />
          </div>

          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};
export default Template;

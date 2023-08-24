import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./wizard.scss";

import React from "react";

const Wizard = ({ title, content }) => {
  return (
    <div className="wizard">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Wizard;

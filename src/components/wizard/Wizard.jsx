import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./wizard.scss";

import React from "react";

const Wizard = ({ title, content, data, isSelected, onClick }) => {
  const widgetStyle = {
    backgroundColor: isSelected ? "blue" : "lightgray",
    // Add other styles as needed
  };

  return (
    <div className="wizard" style={widgetStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Wizard;

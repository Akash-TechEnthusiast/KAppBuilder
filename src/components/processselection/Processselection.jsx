import "./processselection.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Processselection = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="processselection">
      <div className="left">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
         {isChecked && <div className="content"></div>}
      </div>
      <div className="right">
        <span className="icon">
          <FontAwesomeIcon icon={isChecked ? faMinus : faPlus} />
        </span>
      </div>

     
    </div>
  );
};

export default Processselection;

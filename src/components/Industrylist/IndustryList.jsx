import React from "react";
// Import your Widget component
import Wizard from "../../components/wizard/Wizard";
import "./industrylist.scss";
import { Link } from "react-router-dom";

const IndustryList = () => {
  const handleClick = () => {
    window.alert(`You clicked on Widget`);
    //onClick(); // Call the parent's onClick handler if needed
  };

  const widgets = [
    { title: "Manufacture" },
    { title: "Auto Mobile" },
    { title: "Banks" },
    { title: "Pharma Industry" },
    { title: "IT" },
    { title: "School Management" },
    { title: "Hospital" },
    { title: "Grocery Shop " },
    { title: "Steel" },
    { title: "Dams" },
    { title: "Real Estate" },
    { title: "Widget 3" },
    { title: "Widget 4" },
    { title: "Widget 5" },
    { title: "Widget 6" },
    { title: "Widget 7" },
    { title: "Widget 8" },
    { title: "Widget 9" },
    { title: "Widget 1" },
    { title: "+" },
  ];

  return (
    <div className="widget-list">
      {widgets.map((widget, index) => (
        <Wizard key={index} title={widget.title} content={widget.content} />
      ))}

      <Link to="/vertical" style={{ textDecoration: "none" }}>
        <div class="arrow">
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default IndustryList;

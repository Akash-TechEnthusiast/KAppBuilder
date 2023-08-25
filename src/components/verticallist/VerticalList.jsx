import React from "react";
// Import your Widget component
import Wizard from "../../components/wizard/Wizard";
import "./verticalist.scss";
import { Link } from "react-router-dom";

const VerticalList = () => {
  const handleClick = () => {
    window.alert(`You clicked on Widget`);
    //onClick(); // Call the parent's onClick handler if needed
  };

  const widgets = [
    { title: "XX" },
    { title: "YY" },
    { title: "ZZ" },
    { title: "AA" },
    { title: "BB" },
    { title: "CC" },
    { title: "DD" },
    { title: "EE" },
    { title: "FF" },
    { title: "GG" },
    { title: "XX" },
    { title: "YY" },
    { title: "ZZ" },
    { title: "AA" },
    { title: "BB" },
    { title: "CC" },
    { title: "DD" },
    { title: "EE" },
    { title: "FF" },

    { title: "+" },
  ];

  return (
    <div className="template-container">
      <div className="template-wrapper">
        <div className="template">
          <div className="left">
            <div className="widget-list">
              {widgets.map((widget, index) => (
                <Wizard
                  key={index}
                  title={widget.title}
                  content={widget.content}
                />
              ))}

              <Link to="/vertical" style={{ textDecoration: "none" }}>
                <div class="arrow">
                  <span></span>
                  <span></span>
                </div>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div class="arrowleft">
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default VerticalList;

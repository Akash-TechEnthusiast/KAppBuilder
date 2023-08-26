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
    { id: 1, title: "XX" },
    { id: 2, title: "YY" },
    { id: 3, title: "ZZ" },
    { id: 4, title: "AA" },
    { id: 5, title: "BB" },
    { id: 6, title: "CC" },
    { id: 7, title: "DD" },
    { id: 8, title: "EE" },
    { id: 9, title: "FF" },
    { id: 10, title: "GG" },
    { id: 11, title: "XX" },
    { id: 12, title: "YY" },
    { id: 13, title: "ZZ" },
    { id: 14, title: "AA" },
    { id: 15, title: "BB" },
    { id: 16, title: "CC" },
    { id: 17, title: "DD" },
    { id: 18, title: "EE" },
    { id: 19, title: "FF" },

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
              <Link to="/industry" style={{ textDecoration: "none" }}>
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

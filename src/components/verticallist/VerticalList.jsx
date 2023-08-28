import React from "react";
// Import your Widget component
import Wizard from "../../components/wizard/Wizard";
import "./verticalist.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const VerticalList = () => {
  const handleClick = () => {
    window.alert(`You clicked on Widget`);
    //onClick(); // Call the parent's onClick handler if needed
  };

  const [selectedWidgetId, setSelectedWidgetId] = useState(null);

  const handleWidgetClick = (widgetId) => {
    console.log(widgetId);
    setSelectedWidgetId(widgetId);
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
                  key={widget.id}
                  title={widget.title}
                  content={widget.content}
                  data={widget}
                  isSelected={widget.id === selectedWidgetId}
                  onClick={() => handleWidgetClick(widget.id)}
                />
              ))}

              <Link
                to="/industry/vertical/modules"
                style={{ textDecoration: "none" }}
              >
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

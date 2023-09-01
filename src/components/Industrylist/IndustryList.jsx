import React from "react";
// Import your Widget component
import Wizard from "../../components/wizard/Wizard";
import "./industrylist.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import VerticalList from "../../components/verticallist/VerticalList";

const IndustryList = () => {
  const handleClick = (widgetId) => {
    window.alert(`You clicked on Widget`);
    //onClick(); // Call the parent's onClick handler if needed
  };

  const widgets = [
    { id: 1, title: "Manufacture" },
    { id: 2, title: "Auto Mobile" },
    { id: 3, title: "Banks" },
    { id: 4, title: "Pharma Industry" },
    { id: 5, title: "IT" },
    { id: 6, title: "School Management" },
    { id: 7, title: "Hospital" },
    { id: 8, title: "Grocery Shop " },
    { id: 9, title: "Steel" },
    { id: 10, title: "Dams" },
    { id: 11, title: "Real Estate" },
    { id: 12, title: "Widget 3" },
    { id: 13, title: "Widget 4" },
    { id: 14, title: "Widget 5" },
    { id: 15, title: "Widget 6" },
    { id: 16, title: "Widget 7" },
    { id: 17, title: "Widget 8" },
    { id: 18, title: "Widget 9" },
    { id: 19, title: "Widget 1" },
    { id: 20, title: "+" },
  ];

  const [selectedWidgetId, setSelectedWidgetId] = useState(null);

  const [showChild1, setShowChild1] = useState(true);

  const handleWidgetClick1 = (widgetId) => {
    console.log(widgetId);
    setSelectedWidgetId(widgetId);
    setShowChild1(!showChild1);
  };

  return (
    <div>
      {showChild1 ? (
        <div className="widget-list">
          {widgets.map((widget, index) => (
            <Wizard
              key={widget.id}
              title={widget.title}
              content={widget.content}
              data={widget}
              isSelected={widget.id === selectedWidgetId}
              onClick={() => handleWidgetClick1(widget.id)}
            />
          ))}

          <Link to="/industry/vertical" style={{ textDecoration: "none" }}>
            <div class="arrow">
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
      ) : (
        <VerticalList />
      )}
    </div>
  );
};

export default IndustryList;

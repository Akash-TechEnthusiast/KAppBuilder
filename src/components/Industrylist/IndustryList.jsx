import React from "react";
// Import your Widget component
import Wizard from "../../components/wizard/Wizard";
import "./industrylist.scss";

const IndustryList = () => {
  const widgets = [
    { title: "Widget 1", content: "Content of widget 1" },
    { title: "Widget 2", content: "Content of widget 2" },
    { title: "Widget 3", content: "Content of widget 4" },
    { title: "Widget 4", content: "Content of widget 5" },
    { title: "Widget 5", content: "Content of widget 6" },
    { title: "Widget 6", content: "Content of widget 7" },
    { title: "Widget 7", content: "Content of widget 8" },
    { title: "Widget 8", content: "Content of widget 9" },
    { title: "Widget 9", content: "Content of widget 10" },
  ];

  return (
    <div className="widget-list">
      {widgets.map((widget, index) => (
        <Wizard key={index} title={widget.title} content={widget.content} />
      ))}
    </div>
  );
};

export default IndustryList;

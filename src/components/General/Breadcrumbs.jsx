import React from "react";
import "./breadcrumbs.scss"; // Import your CSS for styling

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index !== items.length - 1 && (
            <span className="separator">{">"}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;

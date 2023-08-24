import React from "react";

import welcomepage from "../../images/new13.jpg";
import "./welcomepage.scss";

const WelcomePage = () => {
  const widgetview2 = {
    // position: "relative",
    width: "100%", // Set the desired container width
    height: "100%", // Set the desired container height
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //width: '300px',           // Set the desired width
    //height: '200px',          // Set the desired height
    //backgroundColor: "lightgray",
  };

  const widgetview = {
    maxWidth: "100%", // Fit the image within the container width
    maxHeight: "100%", // Ensure the image doesn't exceed the container height
    padding: "10px",
  };

  return (
    <div style={widgetview2}>
      <img src={welcomepage} alt="Image" style={widgetview} />
    </div>
  );
};

export default WelcomePage;

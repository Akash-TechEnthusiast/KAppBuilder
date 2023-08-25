import React, { useState } from "react";
import "./imagegallery.scss"; // Import your CSS for styling

import welcomepage from "../../images/new13.jpg";

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="image-container">
      <div className="image-wrapper">
        <img src={images[currentIndex]} alt="Image" />
        <button
          className="arrow-icon prev"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <button
          className="arrow-icon next"
          onClick={goToNext}
          disabled={currentIndex === images.length - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;

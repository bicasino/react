import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  const renderSlides = item.map((image) => (
    <div key={image.content}>
      <img src={`https://it.vnpost.vn/${image.content}`} />
      {/* <p className="legend">{image.content}</p> */}
    </div>
  ));

  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      selectedItem={item[currentIndex]}
      onChange={handleChange}
      className="carousel-container"
      showThumbs={false}
      showStatus={false}
    >
      {renderSlides}
    </Carousel>
  );
};

export default Banner;

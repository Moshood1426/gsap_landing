import React from "react";
import "./style.scss";

import photos from "../../data";

const Featured = () => {
  const [firstImage, secondImage] = photos;

  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstImage} alt="" />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={secondImage} alt="" />
      </div>
    </section>
  );
};

export default Featured;

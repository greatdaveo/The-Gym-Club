import React from "react";
import "../styles/Testimonials.css";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const Text_Length = testimonialsData.length;

  const handleLeftArrow = () => {
    if (selected === 0) {
      setSelected(Text_Length - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };

  const handleRightArrow = () => {
    if (selected === Text_Length - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };

  return (
    <div className="testimonials">
      <div className="left-testimonial">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-testimonial">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />

        <div className="arrows">
          <img onClick={handleLeftArrow} src={leftArrow} alt="" />
          <img onClick={handleRightArrow} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

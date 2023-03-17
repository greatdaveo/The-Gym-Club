import React from "react";
import "../styles/Testimonials.css";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";

import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };

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
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>

      {/* FRAMER MOTION ANIMATION */}
      <div className="right-testimonial">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />

        {/* ::::::::::::::::::::::::::::::: */}

        <div className="arrows">
          <img onClick={handleLeftArrow} src={leftArrow} alt="" />
          <img onClick={handleRightArrow} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

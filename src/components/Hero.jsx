import React from "react";
import Header from "./Header";
import "../styles/Hero.css";
import HeroImage from "../assets/hero_image.png";
import Heart from "../assets/heart.png";
import HeroImageBack from "../assets/hero_image_back.png";
import CaloriesImage from "../assets/calories.png";

import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero">
      {/* FOR THE BLUR STYLING */}
      <div className="blur hero-blur"></div>

      {/* ::::::::::::::::::::::::::::::: */}
      <div className="left-hero">
        <Header />

        <div className="the-best-ad">
          {/* Framer Motion Animation */}
          <motion.div
            initial={{ left: "210px" }}
            whileInView={{ left: "10px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          {/* ::::::::::::::::::::::::::::::::::::::::::: */}
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>

        <div className="hero-right-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>

          <div>
            <span>IDEAL BODY</span>
          </div>

          <div className="hero-mini-text">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* HERO FIGURES */}
        <div className="hero-figures">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* HERO BUTTONS */}
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* The Left Side of the Hero */}
      <div className="right-hero">
        <button className="btn">Join Now</button>

        {/* Framer Motion Animation */}
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          transition={transition}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* :::::::::::::::::::: */}

        {/* The Hero Images */}
        <img src={HeroImage} className="hero-img" alt="The Hero Illustration" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={HeroImageBack}
          className="hero-img-back"
          alt="The Hero Illustration Back"
        />

        {/* THE CALORIES DIV */}
        <motion.div
          className="calories"
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
        >
          <img src={CaloriesImage} alt="Calories Illustration" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Header from "./Header";
import "../styles/Hero.css";
import HeroImage from "../assets/hero_image.png";
import Heart from "../assets/heart.png";
import HeroImageBack from "../assets/hero_image_back.png";
import CaloriesImage from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />

        <div className="the-best-ad">
          <div></div>
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

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* The Hero Images */}
        <img src={HeroImage} className="hero-img" alt="The Hero Illustration" />
        <img
          src={HeroImageBack}
          className="hero-img-back"
          alt="The Hero Illustration Back"
        />

        {/* THE CALORIES DIV */}
        <div className="calories">
          <img src={CaloriesImage} alt="Calories Illustration" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

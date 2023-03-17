import React from "react";
import "../styles/Plans.css";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      {/* FOR THE PLANS BLUR STYLING */}
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      {/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

      <div className="cards-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>

      {/* FOR THE PLANS CARD */}
      <div className="plans-card">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}

            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            {/* FOR THE FEATURES INSIDE THE CARD */}
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -&gt; </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

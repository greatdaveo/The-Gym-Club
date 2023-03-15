import React from "react";
import "../styles/Programs.css";
import { programsData } from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>

      {/* THE PROGRAMS DATA */}

      <div className="program-card">
        {programsData.map((program) => (
          <div className="program-category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <>Join Now</>
              <img src={RightArrow} className="arrow" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

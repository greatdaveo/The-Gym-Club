import React from "react";
import "../styles/JoinUs.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const JoinUs = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vfq1gve",
        "template_fhblj4s",
        formRef.current,
        "lHeYzJzirNa7NiBBf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join-us" id="join-us">
      <div className="left-ju">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-ju">
        <form ref={formRef} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn join-btn">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;

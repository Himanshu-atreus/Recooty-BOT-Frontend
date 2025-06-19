import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletScreenButton, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";
import img from "../Assets/saying hi.png"
function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleinterviewclick = () => {
    navigate("/interview");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Meet Rico — Your Smart AI Interviewer</p>
          <h2 className="text-title">
            Revolutionize the hiring process with automated, intelligent candidate interviews 
          </h2>
          <p className="text-descritpion">
        What Rico Does
        <br/>
        🕒 24/7 Interview Availability
            <br/>
        🧠 AI-Powered Evaluation
            <br/>
        ⚖️ Bias-Free Screening
            <br/>
        🔍 Deep Candidate Insights
            <br/>
        🌍 Remote-Friendly
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleinterviewclick}
          >
            <FontAwesomeIcon icon={faTabletScreenButton} /> Create Interview
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>Fullstack</p>
              <p>Take interview</p>
            </div>

            <div className="text-stats-container">
              <p>Senior Developer</p>
              <p>Take interview</p>
            </div>

            <div className="text-stats-container">
              <p>Analyst</p>
              <p>Take interivew</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={img} alt="chat bot" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;

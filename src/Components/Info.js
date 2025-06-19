import React from "react";
import InformationCard from "./InformationCard";
import { faLevelUp, faTools, faTimeline } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
         We bring interviewing to your convenience, offering a comprehensive range of on-demand,
          AI-powered interviews tailored to different roles, skills, and difficulty levels.
           Our intelligent platform connects candidates with Recooty’s smart chat bot, capable of conducting structured interviews,
            evaluating performance, and delivering actionable insights instantly.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Role-Based Interviewing"
          description="Whether it's tech, marketing, HR, finance, or operations — our bot is equipped with role-specific question banks,
           ensuring every candidate is assessed fairly, thoroughly, and in line with the position's requirements."
          icon={faTools}
        />

        <InformationCard
          title="Difficulty Customization"
          description="From entry-level screenings to senior expert evaluations, our system dynamically adapts to the selected difficulty level,
           allowing hiring teams to run interviews for freshers, experienced professionals, and leadership candidates with precision."
          icon={faLevelUp}
        />

        <InformationCard
          title="Real-Time Evaluation"
          description="Our chat bot provides instant feedback, skill scoring, 
          and behavioral analysis based on candidate responses — helping you make faster, data-driven hiring decisions without manual effort."
          icon={faTimeline}
        />
      </div>
    </div>
  );
}

export default Info;

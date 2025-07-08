import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, img, github, live }) => {
  return (
    <div className="project-card">
      <img src={img} alt={title} className="project-img" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          {live && <a href={live} target="_blank" rel="noreferrer">Live Demo</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

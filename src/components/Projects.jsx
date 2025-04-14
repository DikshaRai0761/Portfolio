import "./Projects.css";
import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://i.postimg.cc/wvkCVWxn/Portfolio.png",
    description: "A personal portfolio website built with React.js.",
    techStack: "React.js, CSS",
    github: "",
    demo: "",
  },

  {
    name: "AirWin",
    image: "https://i.postimg.cc/qMhLWpt7/AirWin.jpg",
    description:
      "A full-stack Hotel's Boking application with user authentication.",
    techStack: "JS, Node.js, MongoDB, Express",
    github: "https://github.com/DikshaRai0761/AirWin",
    demo: "",
  },

  {
    name: "Weather App",
    image: "https://i.postimg.cc/DfdYH0Gc/Weather-App.png",
    description:
      "A Weather application using of React.js and React MUI Library, and Open Weather Map API for current Weather Data.",
    techStack: "React.js, MUI React Library, OpenWeatherMap API",
    github: "",
    demo: "",
  },

  {
    name: "Spotify Clone",
    image: "https://i.postimg.cc/7LGtswy3/Spotify.png",
    description:
      "Spotify desktop app clone built with Tauri and Tailwind, with basic functionality.",
    techStack:
      "HTML, CSS, and JavaScript.",
    github: "https://github.com/DikshaRai0761/Clone-Spotify",
    demo: "https://diksharai0761.github.io/Clone-Spotify/"
  },
  {
    name: "Zerodha Website",
    image: "https://i.postimg.cc/jdt6wKg8/Zerodha.png",
    description: "This repository includes a clone of the popular stock trading platform, built using the MERN stack.",
    techStack: "React.js, Node.js, MongoDB",
    github: "https://github.com/DikshaRai0761/ZERODHA",
    demo: "",
  },
  {
  name: "Zoom App",
  image: "https://i.postimg.cc/9Qqfcwds/Zoom.png",
  description: "Simple Web Application that offer you to create video meeting room using WebRTC and Socket. ",
  techStack: "Next.js,TypeScript, Clerk, getstream, shadcn, Tailwind CSS",
  github: "https://github.com/DikshaRai0761/ZOOM",
  demo: "",
},
{
  name: "Simon Says Game",
  image: "https://i.postimg.cc/3x7KQfw0/Simon-Says-Game.png",
  description: "A Simon Says Game using Java Script  ",
  techStack: "Java Script, HTML 5, CSS",
  github: "https://github.com/DikshaRai0761/Simon-Says-Game",
  demo: "https://diksharai0761.github.io/Simon-Says-Game/",
},
];

const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <div className="headings">
        <h2 className="heading">My Projects</h2>
        <p className="sub-heading">Here are some of my best works.</p>
        <p>Please Scrool Up</p>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />
            <div className="details">
              <div>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <div>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech-stack">
                  Tech Stack: {project.techStack}
                </p>
                <div className="project-links">
                  <button className="project-link">
                    <a href={project.github} target="_blank">
                      GitHub
                    </a>
                  </button>

                  <button className="project-link">
                    <a href={project.demo || "#"} target="_blank">
                      {project.demo ? "Live Demo" : "Not Deployed"}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
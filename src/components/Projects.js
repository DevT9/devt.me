import React from 'react';

const projectsData = [
  {
    title: "Clipper",
    description: "Automated customizable Highlights Creator for Basketball Games",
    tech: "React, Tailwind CSS, FastAPI, AWS Amplify, S3, Lambda, EasyOCR, Llama 3-8B, OpenAI Whisper, Python, Docker",
    link: "https://github.com/PiAreSquared/Open-Source-Software-Senior-Design-Project.git"
  },
  {
    title: "npm replica",
    description: "Development of REST API/Full Stack Web App that mimics the npm registry",
    tech: "Node.js, Express, MongoDB, Typescript, AWS CodePipeline, S3, EC2, Lambda",
    link: "https://github.com/DevT9/ECE461_Team11.git"
  },
  {
    title: "JOS Operating System",
    description: "Implementation of xv6 operating system based on MIT 6.828",
    tech: "C, x86 Assembly",
    link: "#" // Replace with actual link when available
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index} 
            className="project-card"
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <span className="tech-label">Technologies:</span>
                <div className="tech-list">
                  {project.tech}
                </div>
              </div>
            </div>
            <div className="project-arrow">→</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
import React from 'react';

const projectsData = [
  {
    title: "Project 1",
    description: "A brief description of project 1. This is a placeholder for the actual project details.",
    tech: "React, TypeScript, Tailwind CSS"
  },
  {
    title: "Project 2",
    description: "Description for project 2. Replace this with the actual project information.",
    tech: "Node.js, Express, MongoDB"
  },
  {
    title: "Project 3",
    description: "Project 3 description. Update this with real project details when available.",
    tech: "Python, Django, PostgreSQL"
  },
  {
    title: "Project 4",
    description: "Placeholder for project 4 description. Fill in with actual project information.",
    tech: "Vue.js, Vuex, Firebase"
  },
  {
    title: "Project 5",
    description: "Project 5 details go here. Replace with the actual project description.",
    tech: "React Native, GraphQL, AWS"
  },
  {
    title: "Project 6",
    description: "Description for project 6. Update this with the real project information when ready.",
    tech: "Angular, RxJS, NestJS"
  },
  {
    title: "Project 7",
    description: "A placeholder for project 7. This will showcase your skills in machine learning.",
    tech: "Python, TensorFlow, Scikit-learn"
  },
  {
    title: "Project 8",
    description: "Project 8 is a mobile app. Replace this with the actual app description.",
    tech: "Flutter, Dart, Firebase"
  },
  {
    title: "Project 9",
    description: "Placeholder for project 9. This could be a web scraping project.",
    tech: "Python, BeautifulSoup, Pandas"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a 
            href="https://github.com/DevT9" 
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
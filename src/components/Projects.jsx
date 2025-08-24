import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Fertilizer Store',
      technologies: 'React.js, Node.js, Express.js, MongoDB, CSS, JavaScript',
      date: 'June 2025',
      link: 'https://fertilizer-store-seven.vercel.app/',
      description: 'Designed and developed a feature-rich full-stack fertilizer e-commerce web application applying React state management to handle real-time cart operations and filtering logic.'
    },
    {
      title: 'Leafy Living',
      technologies: 'HTML, CSS, JavaScript',
      date: 'September 2024',
      link: 'https://leafy-living.netlify.app/',
      description: 'Designed and built a plant-selling website featuring 30+ plant listings across indoor, outdoor, and air-purifying categories, improving product discoverability.'
    },
    {
      title: 'Spiritual Kerala',
      technologies: 'HTML, CSS, JavaScript',
      date: 'July 2024',
      link: 'https://templesofkerala.netlify.app/',
      description: 'Designed and developed an interactive, responsive web application using HTML, CSS, and JavaScript, integrating ScrollReveal animations to deliver structured, visually engaging, and user-friendly content presentation.'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-meta">
                <span className="technologies">{project.technologies}</span>
                <span className="date">{project.date}</span>
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Link 🔗</a>}
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
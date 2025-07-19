import React from 'react';

const Experience = () => {
  const experiences = [
    {
      position: 'Full Stack Development Intern',
      company: 'Technical Hub Private Limited',
      duration: 'May - June 2025',
      description: [
        'Selected after a comprehensive screening process for a hands-on, real-time development internship.',
        'Worked on Full Stack Development with React Native, gaining practical experience in both frontend and backend technologies.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.position} | {exp.company}</h3>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
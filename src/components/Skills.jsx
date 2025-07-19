import React from 'react';

const Skills = () => {
  const skills = [
    { category: 'Programming Languages', items: ['Java (OOP)', 'Python'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native'] },
    { category: 'Backend', items: ['Express.js', 'Node.js'] },
    { category: 'Database', items: ['MongoDB', 'SQL'] },
    { category: 'Core CS Subjects', items: ['Operating Systems', 'Computer Networks'] },
    { category: 'Tools', items: ['VS Code', 'Git', 'Jupyter Notebook'] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
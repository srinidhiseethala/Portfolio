import React from 'react';

const Achievements = () => {
  const achievements = [
    'Tackled 330+ problems on LeetCode, achieving a 61.5% acceptance rate, and beats 97.4% of global users.',
    'Solved 200+ programs on GeeksforGeeks, with a contest rating of 1565.',
    'Solved 300+ problems on CodeChef, achieving a highest rating of 1296, reflecting proficiency across diverse coding platforms.',
    'Earned 5 star badges on HackerRank in Python highlighting language-specific mastery.',
    'Practiced and implemented advanced coding problems on LeetCode, CodeChef, and GFG, consistently applying core algorithms, recursion, and data structure concepts across platforms.'
  ];

  const certifications = [
    'ServiceNow - Certified System Administrator',
    'ServiceNow - Certified Application Developer',
    'Oracle - Certified Foundations Associate, Database',
    'IT Specialist – HTML and CSS',
    'IT Specialist – Javascript',
    'IT Specialist – Python'
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="achievements-container">
          <div className="achievements-list">
            <h3>Coding Achievements</h3>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="certifications-list">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((certification, index) => (
                <li key={index}>{certification}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
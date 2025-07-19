// import React from 'react';

// const Education = () => {
//   const education = [
//     {
//       institution: 'ADITYA ENGINEERING COLLEGE',
//       degree: 'Bachelor of Technology, Data Science',
//       duration: '2022 - 2026',
//       details: 'Current CGPA: 8.09'
//     },
//     {
//       institution: 'TIRUMALA MAHILA JUNIOR KALASALA',
//       degree: 'Board of Intermediate Education',
//       duration: '2020 - 2022',
//       details: 'State Percentage: 95.90'
//     },
//     {
//       institution: 'LOYOLA ENGLISH MEDIUM SCHOOL',
//       degree: 'Board of Secondary Education',
//       duration: '2020',
//       details: 'State Percentage: 96.83'
//     }
//   ];

//   return (
//     <section id="education" className="section">
//       <div className="container">
//         <h2 className="section-title">Education</h2>
//         <div className="education-container">
//           {education.map((edu, index) => (
//             <div key={index} className="education-item">
//               <h3>{edu.institution}</h3>
//               <p className="degree">{edu.degree}</p>
//               <p className="duration">{edu.duration}</p>
//               <p className="details">{edu.details}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from 'react';

const Education = () => {
  const education = [
    {
      institution: 'ADITYA ENGINEERING COLLEGE',
      degree: 'Bachelor of Technology, Data Science',
      duration: '2022 - 2026',
      details: 'Current CGPA: 8.09'
    },
    {
      institution: 'TIRUMALA MAHILA JUNIOR KALASALA',
      degree: 'Board of Intermediate Education',
      duration: '2020 - 2022',
      details: 'State Percentage: 95.90'
    },
    {
      institution: 'LOYOLA ENGLISH MEDIUM SCHOOL',
      degree: 'Board of Secondary Education',
      duration: '2020',
      details: 'State Percentage: 96.83'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{edu.duration}</div>
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
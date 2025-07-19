// import React from 'react';
// import profilePhoto from '../assets/srinidhi-photo.jpg';

// const About = () => {
//   return (
//     <section id="about" className="section">
//       <div className="container">
//         <h2 className="section-title" data-aos="fade-up">About Me</h2>
//         <div className="about-content">
//           <div className="about-image" data-aos="fade-right" data-aos-delay="200">
//             <img src={profilePhoto} alt="Seethala Srinidhi" />
//           </div>
//           <div className="about-text" data-aos="fade-left" data-aos-delay="400">
//             <p>
//               I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Data Science at Aditya Engineering College. 
//               With expertise in both frontend (React.js, JavaScript) and backend (Node.js, Express.js) technologies, 
//               I build robust web applications. My strong foundation in Data Structures and Algorithms helps me solve 
//               complex problems efficiently.
//             </p>
//             <p>
//               When I'm not coding, you can find me solving problems on LeetCode or contributing to open-source projects. 
//               I'm always eager to learn new technologies and take on challenging projects.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import profilePhoto from '../assets/srinidhi-photo.jpg';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-image" data-aos="fade-right" data-aos-delay="200">
            <img src={profilePhoto} alt="Seethala Srinidhi" />
          </div>
          <div className="about-text" data-aos="fade-left" data-aos-delay="400">
            <p>
              I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Data Science at Aditya Engineering College. 
              Skilled in <strong>Java</strong>, <strong>Python</strong>, and modern web development, I build responsive frontends with 
              <strong> HTML, CSS, JavaScript, React.js, and React Native</strong>, and scalable backends using <strong>Node.js, 
              Express.js, and MongoDB</strong>.
            </p>
            
            <p>
              I'm experienced with developer tools like <strong>VS Code, Git, and Jupyter Notebook</strong>, and recently developed 
              a <strong>production-ready e-commerce platform</strong> featuring real-time order processing, dynamic filtering, 
              and advanced wishlist/cart functionality.
            </p>
            
            <p>
              My competitive programming achievements include solving <strong>350+ problems on LeetCode</strong> with a 61.5% 
              acceptance rate (top 2.6% globally), <strong>200+ problems on GeeksforGeeks</strong> (contest rating: 1565), 
              and <strong>300+ problems on CodeChef</strong> (highest rating: 1296). I've earned a <strong>5-star Python badge 
              on HackerRank.</strong> My coding strengths lie in applying core algorithms, recursion, and data structures across platforms with consistency.
            </p>
            
            <p>
              I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
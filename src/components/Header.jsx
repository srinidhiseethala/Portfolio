import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const headerRef = useRef(null);
  
  const roles = ['Data Science Student','Full Stack Developer', 'Problem Solver', 'ServiceNow Certfied','Tech Enthusiast' ];
  
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  useEffect(() => {
    // Create particles on mouse move
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const particles = document.createElement('div');
        particles.className = 'particle';
        
        const x = e.clientX;
        const y = e.clientY - headerRef.current.offsetTop;
        
        particles.style.left = `${x}px`;
        particles.style.top = `${y}px`;
        
        const size = Math.random() * 10 + 5;
        particles.style.width = `${size}px`;
        particles.style.height = `${size}px`;
        
        const animationDuration = Math.random() * 3 + 2;
        particles.style.animation = `float-particle ${animationDuration}s linear forwards`;
        
        headerRef.current.appendChild(particles);
        
        // Remove particle after animation completes
        setTimeout(() => {
          if (headerRef.current && particles.parentNode === headerRef.current) {
            headerRef.current.removeChild(particles);
          }
        }, animationDuration * 1000);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <h1 className="glowing-text">Seethala Srinidhi</h1>
        <h2>{text}</h2>
      </div>
    </header>
  );
};

export default Header;
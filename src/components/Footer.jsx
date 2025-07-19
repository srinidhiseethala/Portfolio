import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Seethala Srinidhi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
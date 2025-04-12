// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // optional styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with 💙 for music lovers — {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;


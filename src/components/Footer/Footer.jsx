import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>Seb Dan Alex</p>
      </div>
      <div className="social">
        <a href="contact us" className="support">Contact Us</a>
        <a href="facebook" className="face">f</a>
        <a href="t" className="tweet">t</a>
        <a href="in" className="linked">in</a>
      </div>
    </footer>    
  );
}

import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars"></i>
        </span>
        <p className="logo">Easter Memory</p>
        <p className="name">{props.text}</p>
        <p className="number">Difficulty :{props.number}</p>
      </nav>
    </div>
  );
}

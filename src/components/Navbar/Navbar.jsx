import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
  return (
    <div>
      <body>
        <nav class="navbar">
          <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
          </span>
          <p className="logo">Easter Memory</p>
          <p className="name">{props.text}</p>
          <p className="number">Difficulty :{props.number}</p>
        </nav>
      </body>
    </div>
  );
}

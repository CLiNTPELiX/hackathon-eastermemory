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
          <a href="logo" className="logo">{props.text}</a>
        </nav>
      </body>
    </div>
  );
}

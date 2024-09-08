import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Your Name's Personal Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
          <li><Link to="/blog">My Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

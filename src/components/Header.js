import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="name font-oranienbaum">Dev Thakkar</Link>
      <nav className="sections">
        <Link to="/projects" className="section">Projects</Link>
        <Link to="/resume" className="section">Resume</Link>
        {/* <Link to="/blog" className="section">Blog</Link> */}
        {/* <Link to="/contact" className="section">Contact</Link> */}
      </nav>
    </header>
  );
};

export default Header;

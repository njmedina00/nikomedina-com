import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Your Name / Brand</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

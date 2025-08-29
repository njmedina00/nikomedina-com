import React from 'react';

const Header: React.FC = () => {
  // Array of navigation items
  const navItems = [
    { label: 'About', href: '#about', show: true },
    { label: 'Projects', href: '#projects', show: false },
    { label: 'Contact', href: '#contact', show: true },
  ];

  return (
    <header className="header">
      <h1>Niko Medina - Freelance Web Developer</h1>
      <nav>
        {navItems
          .filter((item) => item.show)
          .map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
      </nav>
    </header>
  );
};

export default Header;

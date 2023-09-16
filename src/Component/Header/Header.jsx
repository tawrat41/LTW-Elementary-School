/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="header-container">
      <img id="header-image" src="/src/media/banner.jpg" alt="Header" />
      <div className="overlay"></div>
      {/* <div className="text-container">
        <img id="header-logo" src="src/media/logo.png" alt="Logo" />
        <h2>Welcome to</h2>
        <h1>LEAD THE WAY Elementary School</h1>
      </div> */}
    </div>
  );
};

export default Header;

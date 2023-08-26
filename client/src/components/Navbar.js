import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          uLegislation
        </Link>
        <div className="navbar-icon" onClick={handleDropdownToggle}>
          <i className={isDropdownOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isDropdownOpen ? 'navbar-menu active' : 'navbar-menu'}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={handleDropdownToggle}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/draft" className="navbar-link" onClick={handleDropdownToggle}>
              Draft Legislation
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/draftlist" className="navbar-link" onClick={handleDropdownToggle}>
              Draft List
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/reviewdraft" className="navbar-link" onClick={handleDropdownToggle}>
              Review Draft
            </Link>
          </li>
          {/* Add more links for other pages here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

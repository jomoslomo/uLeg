import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bootbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <Navbar>
        
      </Navbar>
    );
  };
  
  export default Bootbar;
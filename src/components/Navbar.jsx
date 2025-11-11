import React, { useState } from 'react';
import './Navbar.css';
import LogoImage from '../assets/logo.jpg'

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Our History</a></li>
        <li><a href="#">Mission</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='admin-menu'>
        <button onClick={() => setOpen(!open)}>Administartive ⬇</button>
        {open && (
            <ul className='dropdown'>
                <li><a href="#">Admin Login</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Staff Portal</a></li>
                <li><a href="#">Student Records</a></li>
                <li><a href="#">Result Management</a></li>
            </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

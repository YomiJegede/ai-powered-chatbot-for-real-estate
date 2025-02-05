// Navbar.js (Navigation Bar)

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Button } from '@mui/material';

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">RealEstateApp</Link>
      <div className="nav-links">
        {!user ? (
          <Link to="/login">
            <Button variant="contained" color="primary">Login</Button>
          </Link>
        ) : (
          <>
            <Link to="/profile">
              <Button variant="contained" color="secondary">Profile</Button>
            </Link>
            <Button variant="outlined" color="error" onClick={handleLogout}>Logout</Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


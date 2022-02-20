import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './NavBar.css';

function NavBar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      {!isLoggedIn && (
        <>
          <Link className="navbar__signup-link" to="/signup">Регистрация</Link>
          <Link className="navbar__signin-link" to="/signin">Войти</Link>
        </>
      )}

      {isLoggedIn && (
        <Navigation />
      )}
    </nav>
  );
}

export default NavBar;

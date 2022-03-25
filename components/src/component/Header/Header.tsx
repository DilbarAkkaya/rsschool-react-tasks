import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
        <NavLink to="/404">404</NavLink>
      </header>
    );
  }
}

export default Header;

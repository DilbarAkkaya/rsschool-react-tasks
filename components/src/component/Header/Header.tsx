import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { PATH_MAIN, PATH_ABOUT, PATH_OTHER } from '../../constants/constants';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <NavLink to={PATH_MAIN}>Main</NavLink>
        <NavLink to={PATH_ABOUT}>About Us</NavLink>
        <NavLink to={PATH_OTHER}>404</NavLink>
      </header>
    );
  }
}

export default Header;

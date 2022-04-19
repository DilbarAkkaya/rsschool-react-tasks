import { NavLink } from 'react-router-dom';
import { PATH } from '../../constants/constants';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <NavLink to={PATH.MAIN}>Main</NavLink>
      <NavLink to={PATH.FORM}>Form</NavLink>
      <NavLink to={PATH.ABOUT}>About Us</NavLink>
      <NavLink to={PATH.OTHER}>404</NavLink>
    </header>
  );
};

export default Header;

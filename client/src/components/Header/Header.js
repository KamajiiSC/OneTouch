import React from 'react';
import './Header.css';
import Logo from '../../resources/onetouch-logo.svg';

const Header = () => (
  <header>
    <a href="#" id="logo-btn">
      <img src={Logo} alt="Site logo for OneTouch" id="site-logo"/>
    </a>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Join Us</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </header> 
);

export default Header;
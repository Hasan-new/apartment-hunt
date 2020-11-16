import React from 'react';

import './Header.css';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import MainHeader from './MainHeader/MainHeader';
// import './Header.scss'
const Header = () => {
   return (
      <div>
         <HeaderNavbar></HeaderNavbar>
         <MainHeader></MainHeader>
      </div>
   );
};

export default Header;
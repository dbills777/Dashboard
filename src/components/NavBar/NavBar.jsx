import React from 'react';
import './navbar.scss';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='navbar-left'>
          <span className='logo-text'>Sales & Revenue</span>
        </div>
        <div className='navbar-right'>
          <div className='nav-iconContainer'>
            <NotificationsNone />
            <span className='nav-icon-badge'>2</span>
          </div>
          <div className='nav-iconContainer'>
            <Language />
            <span className='nav-icon-badge'>2</span>
          </div>
          <div className='nav-iconContainer'>
            <Settings />
          </div>
          <img src='https://picsum.photos/200/300' alt='avatar' className='navAvatar' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

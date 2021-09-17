import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import './sidebar.scss';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='sidbar-menu'>
          <h3 className='sidebar-title'>Dashboard</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebar-listItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebar-listItem'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidbar-menu'>
          <h3 className='sidebar-title'>Quick View</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listItem active'>
              <PermIdentity className='sidebarIcon' />
              Users
            </li>
            <li className='sidebar-listItem'>
              <Storefront className='sidebarIcon' />
              Products
            </li>
            <li className='sidebar-listItem'>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebar-listItem'>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidbar-menu'>
          <h3 className='sidebar-title'>Notifications</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listItem active'>
              <MailOutline className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebar-listItem'>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebar-listItem'>
              <ChatBubbleOutline className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidbar-menu'>
          <h3 className='sidebar-title'>Employee</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-listItem active'>
              <WorkOutline className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebar-listItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebar-listItem'>
              <Report className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

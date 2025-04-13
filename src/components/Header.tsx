
import React from 'react';
import { Bell, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="profile-circle"></div>
      </div>
      <h1>AI Recommendations</h1>
      <nav>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>DASHBOARD</li>
        </ul>
      </nav>
      <div className="header-icons">
        <Bell className="icon" />
        <Calendar className="icon" />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-logo">
        <img src="/Logo.png" alt="Logo" />
      </div>
      <h2>Menu</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/sites">Sites</Link></li>
        <li><Link to="/engineers">Engineers</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        {/* Add other links here */}
      </ul>
      <div className="sidebar-user">
        <div className="user-info">
          <img src="/user-avatar.png" alt="User Avatar" className="user-avatar" />
          <div className="user-name">Username</div>
          {/* Additional user info if needed */}
        </div>
        {/* Action links or buttons */}
    
      </div>
    </div>
  );
}

export default Sidebar;

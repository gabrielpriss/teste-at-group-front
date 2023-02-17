import React, { useState } from 'react';

function Sidebar(props) {
  const [selectedTab, setSelectedTab] = useState('Overview');

  function handleTabClick(tabName) {
    setSelectedTab(tabName);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>My App</h2>
      </div>
      <div className="sidebar-tabs">
        <button
          className={selectedTab === 'Overview' ? 'active' : ''}
          onClick={() => handleTabClick('Overview')}
        >
          <i className="fas fa-chart-line"></i>
          <span>Overview</span>
        </button>
        <button
          className={selectedTab === 'Analytics' ? 'active' : ''}
          onClick={() => handleTabClick('Analytics')}
        >
          <i className="fas fa-chart-pie"></i>
          <span>Analytics</span>
        </button>
        <button
          className={selectedTab === 'Finance' ? 'active' : ''}
          onClick={() => handleTabClick('Finance')}
        >
          <i className="fas fa-wallet"></i>
          <span>Finance</span>
        </button>
        <button
          className={selectedTab === 'Account' ? 'active' : ''}
          onClick={() => handleTabClick('Account')}
        >
          <i className="fas fa-user"></i>
          <span>Account</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

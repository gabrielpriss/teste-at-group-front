import React from 'react';

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button>
          <i className="fas fa-home"></i>
        </button>
      </div>
      <div className="topbar-right">
        <button>
          <i className="fas fa-bell"></i>
        </button>
        <button>
          <i className="fas fa-user"></i>
        </button>
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Topbar;

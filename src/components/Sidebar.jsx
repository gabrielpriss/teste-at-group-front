import React from 'react';

function Sidebar(props) {
  const { activeItem, handleItemClick } = props;

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h4>GENERAL</h4>
      </div>
      <div className="sidebar-tabs">
        <button
          className={activeItem === 'Pokemon List' ? 'active' : ''}
          onClick={() => handleItemClick ('Pokemon List')}
        >
          <i className="fas fa-list"></i>
          <span><b>Pokemon List</b></span>
        </button>
        <button
          className={activeItem === 'Analytics' ? 'active' : ''}
          onClick={() => handleItemClick ('Analytics')}
        >
          <i className="fas fa-chart-pie"></i>
          <span><b>Analytics</b></span>
        </button>
        <button
          className={activeItem === 'Finance' ? 'active' : ''}
          onClick={() => handleItemClick ('Finance')}
        >
          <i className="fas fa-wallet"></i>
          <span><b>Finance</b></span>
        </button>
        <button
          className={activeItem === 'Account' ? 'active' : ''}
          onClick={() => handleItemClick ('Account')}
        >
          <i className="fas fa-user"></i>
          <span><b>Account</b></span>
        </button>
      </div>
      <div className="sidebar-title">
        <h4>MANAGEMENT</h4>
      </div>
      <div className="sidebar-tabs">
        <button
          className={activeItem === 'Customers' ? 'active' : ''}
          onClick={() => handleItemClick ('Customers')}
        >
          <i className="fas fa-users"></i>
          <span><b>Customers</b></span>
        </button>
        <button
          className={activeItem === 'Products' ? 'active' : ''}
          onClick={() => handleItemClick ('Products')}
        >
          <i className="fas fa-shopping-cart"></i>
          <span><b>Products</b></span>
        </button>
        <button
          className={activeItem === 'Orders' ? 'active' : ''}
          onClick={() => handleItemClick ('Orders')}
        >
          <i className="fas fa-sort-amount-up"></i>
          <span><b>Orders</b></span>
        </button>
        <button
          className={activeItem === 'Invoices' ? 'active' : ''}
          onClick={() => handleItemClick ('Invoices')}
        >
          <i className="fas fa-list"></i>
          <span><b>Invoices</b></span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Home(props) {
  const [activeItem, setActiveItem] = useState('Overview');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <Topbar />
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
      <div className="view">
        <h1>{activeItem}</h1>
        <p>This is the {activeItem} view.</p>
      </div>
    </div>
  );
}

export default Home;

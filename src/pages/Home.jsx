import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Pokemonlist from '../components/Pokemonlist';

function Home() {
  const [activeItem, setActiveItem] = useState('Pokemon List');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <Topbar />
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
      <div className="view">
        <div className='header'>
          <p className='title-tab'>{activeItem}</p>
          <h2 className='sub-title-tab'>This is the {activeItem}.</h2>
        </div>

        <div>
          <Pokemonlist />
        </div>
      </div>
    </div>
  );
}

export default Home;

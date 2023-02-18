import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Pokemonlist from '../components/Pokemonlist';

function Home() {
  const [activeItem, setActiveItem] = useState('Pokemonlist');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div>
      <Topbar />
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />
      <div className="view">
        <p className='title-tab'>{activeItem}</p>
        <h2 className='sub-title-tab'>This is the {activeItem}.</h2>
        <div>
        <Pokemonlist />
        </div>
      </div>
    </div>
  );
}

export default Home;

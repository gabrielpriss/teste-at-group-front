import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default function Pokemonlist() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(25);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemonList = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const renderPokemonList = () => {
    return currentPokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePerPageChange = (event) => {
    setPokemonPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pokemonList.length / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <p className='title-tab2'>Lista de Pokémons e alguns de seus atributos</p>
      <div className='pageConfig'>
        <div className='pageNumbers'>
          <button className='pageButtons' onClick={handlePrevPage} disabled={currentPage === 1}>Voltar</button>
          <p className='title-tab2'><b>Página {currentPage}</b></p>
          <button className='pageButtons' onClick={handleNextPage} disabled={currentPage === Math.ceil(pokemonList.length / pokemonPerPage)}>Próximo</button>
        </div>
        <div className='pageSize'>
          <p className='title-tab2'><b>Mostrando </b></p>
          <select className='select' value={pokemonPerPage} onChange={handlePerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
          </select>
          <p className='title-tab2'><b> por página</b></p>
        </div>
      </div>
      <div className='pokemonDiv'>
        {renderPokemonList()}
      </div>

    </div>
  );
}

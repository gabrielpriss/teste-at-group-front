import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pokemonlist() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  function handlePokemonClick(pokemon) {
    axios.get(pokemon.url)
      .then(response => {
        setSelectedPokemon(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  function eachPokemonType(pokemon) {
    axios.get(pokemon.url)
    .then(response => {
      console.log(response.data.types[0].type.name);
      return (response.data.types[0].type.name);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      <p className='title-tab2'>Clique em algum pokemon para ver seus atributos</p>
      <div className='pokemonDiv'>
        {pokemonList.map(pokemon => (
          <div className='eachPokemon' key={pokemon.name}>
            <a>
              <img onClick={() => handlePokemonClick(pokemon)} className='img-pkm' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.match(/\/\d+/)[0].slice(1)}.png`} alt={pokemon.name} />
            </a>
            <div>
              <h2 className='pokemon-name'><b>{capitalizeFirstLetter(pokemon.name)}</b></h2>
            </div>
            <div className='card-bottom'>
              <p className='card-bottom-text'>{eachPokemonType(pokemon)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

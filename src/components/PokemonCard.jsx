import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonCard(props) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await fetch(props.pokemon.url);
      const data = await response.json();
      setPokemonData(data);
    };

    fetchPokemonData();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  function eachPokemonType(pokemon) {
    axios
      .get(pokemon.url)
      .then((response) => {
        console.log(response.data.types[0].type.name);
        return response.data.types[0].type.name.charAt(0).toUpperCase() + response.data.types[0].type.name.slice(1).toLowerCase();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="eachPokemon" key={props.pokemon.name}>
      <a href="/#">
        <img
          className="img-pkm"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.url.match(/\/\d+/)[0].slice(1)}.png`}
          alt={props.name}
        />
      </a>
      <div className="pokeStats">
        {/* <h3 className="pokeId">{pokemonData.id}</h3> */}
        <h2 className="pokemon-name">
          <b>{capitalizeFirstLetter(props.pokemon.name)}</b>
        </h2>
        {/* <p>{pokemonData.types[0].type.name}</p> */}
      </div>
      <div className="card-bottom">
        <p className='card-bottom-text'><b>Experiência base: {pokemonData.base_experience}</b></p>
        {/* {pokemonData.types && pokemonData.types.map((type) => (
          <span
            key={type.type.name}
            className={`pokemonType ${type.type.name}`}
          > Tipo: 
            {capitalizeFirstLetter(type.type.name)}
          </span>
        ))} */}
        <p className="card-bottom-text">{eachPokemonType(props.pokemon)}</p>
      </div>
    </div>
  );
}

import React from 'react';
import axios from 'axios';

export default function PokemonCard(props) {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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

        <div className='eachPokemon' key={props.pokemon.name}>
            <a href="/#">
                <img className='img-pkm' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.url.match(/\/\d+/)[0].slice(1)}.png`} alt={props.name} />
            </a>
            <div>
                <h2 className='pokemon-name'><b>{capitalizeFirstLetter(props.pokemon.name)}</b></h2>
            </div>
            <div className='card-bottom'>
                <p className='card-bottom-text'>{eachPokemonType(props.pokemon)}</p>
            </div>
        </div>
    );
}

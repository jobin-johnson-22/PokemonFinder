import React from 'react';
import { PokemonSchema } from '../../types/PokemonSchema';
import './PokeSearchResult.css';

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className='Pokemon-result-card'>
      {selectedPokemon ? (
        <div>
          <img
            className='pokemon-animated-sprite'
            src={sprites?.animated || sprites?.normal}
            alt='pokemon'
          />
          <p>Name: {name}</p>
          <p>Id: {id}</p>
          <p>height: {height}</p>
          <p>weight: {weight}</p>
          <p>Base Exp: {base_experience}</p>
        </div>
      ) : (
        <h2>Welcome to the Pokedex!!</h2>
      )}
    </div>
  );
};

export default PokeSearchResult;

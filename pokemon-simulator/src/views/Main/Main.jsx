import React from 'react';

import './Main.css'
import SmallCard from '../../components/SmallCard/SmallCard';
import LargeCard from '../../components/LargeCard/LargeCard';

export default (props) => {
  const pokemonList = props.pokemonList;
  const updatePokemon = props.updatePokemon;
  const userPokemonData = props.userPokemonData;



  return(
    <div className="container">
      <div className="row">
        <div className="col mx-2">
          {pokemonList.map((pokemonName, idx) =>
            <h1 key={idx}>
              <SmallCard pokemonName={ pokemonName } updatePokemon={ updatePokemon } />
            </h1>
          )}
        </div>
        <div id="LargeCardCol" className="col mx-2 mb-3 sticky-top">
          <LargeCard userPokemonData={ userPokemonData } />
        </div>
      </div>
    </div>
  )
}
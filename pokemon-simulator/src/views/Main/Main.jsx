import React from 'react';

import './Main.css'
import SmallCard from '../../components/SmallCard/SmallCard';
import LargeCard from '../../components/LargeCard/LargeCard';

export default (props) => {
  const pokemonList = props.pokemonList;
  const updatePokemon = props.updatePokemon;
  const userPokemon = props.userPokemon;



  return(
    <div className="container">
      <div className="row">
        <div className="col">
          {pokemonList.map((pokemonName, idx) =>
            <h1 key={idx}>
              <SmallCard pokemonName={ pokemonName } updatePokemon={ updatePokemon } />
            </h1>
          )}
        </div>
        <div className="col">
          <LargeCard userPokemon={ userPokemon } />
        </div>
      </div>
    </div>
  )
}
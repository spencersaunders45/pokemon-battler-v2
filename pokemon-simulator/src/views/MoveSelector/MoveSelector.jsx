import React from 'react';
import { Link } from '@reach/router';

import './MoveSelector.css'
import MovesCard from '../../components/MovesCard/MovesCard';
import LargeCardMoves from '../../components/LargeCardMoves/LargeCardMoves';

export default (props) => {
  const pokemonMoves = props.pokemonMoves;
  const userPokemonData = props.userPokemonData;


  return(
    <div className="container">
      <div className="row">
        <div className="col">
          {pokemonMoves.map((move, idx) => 
            <div key={idx}>
              <MovesCard move={ move } />
            </div>
          )}
        </div>
        <div className="col">
          <LargeCardMoves userPokemonData={ userPokemonData } />
        </div>
      </div>
    </div>
  )
}
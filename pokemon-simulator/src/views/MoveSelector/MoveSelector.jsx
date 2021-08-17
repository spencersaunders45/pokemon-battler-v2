import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';

import './MoveSelector.css'
import MovesCard from '../../components/MovesCard/MovesCard';
import LargeCardMoves from '../../components/LargeCardMoves/LargeCardMoves';

export default (props) => {
  const userMove1Data = props.userMove1Data;
  const userMove2Data = props.userMove2Data;
  const userMove3Data = props.userMove3Data;
  const userMove4Data = props.userMove4Data;
  const pokemonMoves = props.pokemonMoves;
  const userPokemonData = props.userPokemonData;
  const setUserMoves = props.setUserMoves;
  const [selectedMove, setSelectedMove] = useState(1);


  const changeSelectedMove = (move) => {
    setSelectedMove(move);
  }


  const setMove = (moveData) => {
    setUserMoves(selectedMove, moveData)
  }


  return(
    <div className="container">
      <div className="row">
        <div className="col">
          {pokemonMoves.map((moveName, idx) => 
            <div key={idx}>
              <MovesCard moveName={ moveName } setMove={ setMove } />
            </div>
          )}
        </div>
        <div className="col">
          <LargeCardMoves userPokemonData={ userPokemonData } changeSelectedMove={ changeSelectedMove } userMove1Data={ userMove1Data } userMove2Data={ userMove2Data } userMove3Data={ userMove3Data } userMove4Data={ userMove4Data } />
        </div>
      </div>
    </div>
  )
}
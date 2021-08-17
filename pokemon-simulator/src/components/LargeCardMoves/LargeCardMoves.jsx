import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

import Type from '../Type/Type';
import SelectedMoves from '../SelectedMoves/SelectedMoves';

export default (props) => {
  const userMove1Data = props.userMove1Data;
  const userMove2Data = props.userMove2Data;
  const userMove3Data = props.userMove3Data;
  const userMove4Data = props.userMove4Data;
  const userPokemonData = props.userPokemonData;
  const changeSelectedMove = props.changeSelectedMove;
  const [loaded, setLoaded] = useState(false);



  // Redirect to home if the page is refreshed
  useEffect(() => {
    if(userPokemonData.sprites === undefined){
      navigate('/');
    }
    setLoaded(true);
  }, [loaded])



  return(
    <div>
      {userPokemonData.sprites === undefined ? <h1>waiting for data...</h1> :
      <div id="Container" className="container ms-5 mt-5">
        <div className="row">
          <h1 id="Name" className="mt-3">{userPokemonData.name}</h1>
        </div>
        <div className="row">
          <img id="Img" src={userPokemonData.sprites.other["official-artwork"].front_default} alt={ "Front view of " + userPokemonData.name }/>
        </div>
        <div className="row mb-4 d-flex justify-content-center">
          <div className="col">
            <Type type={ userPokemonData.types['0'].type.name } />
            {userPokemonData.types['1'] === undefined ? null : <Type type={ userPokemonData.types['1'].type.name } />}
          </div>
        </div>
        <div className="row">
            <div className="col">
              <SelectedMoves moveNum={1} changeSelectedMove={ changeSelectedMove } moveData={ userMove1Data } />
              <SelectedMoves moveNum={3} changeSelectedMove={ changeSelectedMove } moveData={ userMove3Data } />
            </div>
            <div className="col">
              <SelectedMoves moveNum={2} changeSelectedMove={ changeSelectedMove } moveData={ userMove2Data } />
              <SelectedMoves moveNum={4} changeSelectedMove={ changeSelectedMove } moveData={ userMove4Data } />
            </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            {userMove1Data.name === undefined || userMove2Data.name === undefined || userMove3Data.name === undefined || userMove4Data.name === undefined ?
            <button className="btn btn-outline-danger" disabled>Battle</button>
            :
            <Link to={"/battle"} className="btn btn-danger" >Battle</Link>
            }
          </div>
        </div>
      </div>
      }
    </div>
  )
}
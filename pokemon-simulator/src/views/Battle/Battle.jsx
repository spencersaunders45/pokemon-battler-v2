import React from 'react';

import './Battle.css'
import BackGround from '../../images/BattleBackground.png';
import UserPokemon from '../../components/UserPokemon/UserPokemon';

export default (props) => {
  const userData = props.userData;
  const foeData = props.foeData;
  console.log(userData)


  return(
    <div id="BattleContainer" className="container-fluid" style={{ backgroundImage: `url(${BackGround})` }}>
      <div className="row justify-content-end align-items-end DataRows">
        <div className="col DataDivs">
          <img className="PokemonImg" src={ foeData.pokemonData.sprites.front_default } alt={ foeData.pokemonData.name } />
        </div>
      </div>
      <div className="row align-items-end DataRows">
        <div className="col m-5">
          <UserPokemon userData={ userData } />
        </div>
      </div>
    </div>
  )
}
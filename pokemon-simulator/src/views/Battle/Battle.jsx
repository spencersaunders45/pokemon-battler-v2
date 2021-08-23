import React from 'react';

import './Battle.css'
import BackGround from '../../images/BattleBackground.png';
import UserPokemon from '../../components/UserPokemon/UserPokemon';
import FoePokemon from '../../components/FoePokemon/FoePokemon';

export default (props) => {
  const userData = props.userData;
  const foeData = props.foeData;
  console.log(userData)


  return(
    <div id="BattleContainer" className="container-fluid" style={{ backgroundImage: `url(${BackGround})` }}>
      <div className="row align-items-end DataRows">
        <div className="col m-5 d-flex justify-content-end">
          <FoePokemon foeData={ foeData } />
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
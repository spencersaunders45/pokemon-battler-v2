import React from 'react';

import './Battle.css'
import BackGround from '../../images/BattleBackground.png';
import UserPokemon from '../../components/UserPokemon/UserPokemon';
import FoePokemon from '../../components/FoePokemon/FoePokemon';
import BattleMenu from '../../components/BattleMenu/BattleMenu';

export default (props) => {
  const userData = props.userData;
  const foeData = props.foeData;
  console.log(userData)


  return(
    <div id="BattleContainer" className="container-fluid p-5" style={{ backgroundImage: `url(${BackGround})`, maxWidth: '1000px', maxHeight: '1000px' }}>
      <div className="row align-items-end DataRows">
        <div className="col d-flex justify-content-end">
          <FoePokemon foeData={ foeData } />
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col">
          <UserPokemon userData={ userData } />
        </div>
        <div className="col">
          <BattleMenu userData={ userData } />
        </div>
      </div>
    </div>
  )
}
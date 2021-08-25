import React from 'react';

import './Battle.css'
import BackGround from '../../images/BattleBackground.png';
import BackGround_v2 from '../../images/BattleBackground-v2.jfif';
import UserPokemon from '../../components/UserPokemon/UserPokemon';
import FoePokemon from '../../components/FoePokemon/FoePokemon';
import BattleMenu from '../../components/BattleMenu/BattleMenu';

export default (props) => {
  const userData = props.userData;
  const foeData = props.foeData;
  console.log(userData)


  return(
    <div id="BattleContainer" className="container-fluid p-5" style={{ backgroundImage: `url(${BackGround_v2})` }}>
      <div className="row align-items-end DataRows">
        <div className="col d-flex justify-content-evenly">
          <FoePokemon foeData={ foeData } />
        </div>
      </div>
      <div className="row align-items-end justify-content-evenly">
        <div className="col-auto">
          <UserPokemon userData={ userData } />
        </div>
        <div className="col-auto">
          <BattleMenu userData={ userData } />
        </div>
      </div>
    </div>
  )
}
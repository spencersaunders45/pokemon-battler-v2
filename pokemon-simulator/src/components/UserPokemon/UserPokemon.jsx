import React, { useEffect, useState } from 'react';

import './UserPokemon.css'

export default (props) => {
  const userData = props.userData;
  const health = props.health;
  const [percentHealth, setPercentHealth] = useState('100%');



  useEffect(() => {
    let percent = (health/userData.health) * 100;
    setPercentHealth(percent.toString() + '%');
  }, [health])



  return(
    <div className="container-auto">
      <div className="row">
        <div id="UserInfoBar" className="col-auto bg-light border border-dark border-3 rounded">
          <div className="row my-3">
            <div className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: percentHealth }} aria-valuenow="200" aria-valuemin="0" aria-valuemax="200"></div>
              </div>
            </div>
          </div>
          <div className="row text-start">
            <div className="col text-capitalize">
              <h4>{ userData.pokemonData.name }</h4>
            </div>
            <div className="col">
              <h4>{userData.health} / {userData.health}</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="UserImgDiv" className="col">
            <img id="UserImg" src={ userData.pokemonData.sprites.back_default } alt={ userData.pokemonData.name } />
          </div>
        </div>
      </div>
    </div>
  )
}
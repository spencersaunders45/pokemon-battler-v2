import React from 'react';

import './UserPokemon.css'

export default (props) => {
  const userData = props.userData;
  const userPercentHealth = props.userPercentHealth;



  return(
    <div className="container-auto">
      <div className="row">
        <div className="col-auto bg-light">
          <div id="PokeInfo" className="row">
            <div id="HealthBar" className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="200" aria-valuemin="0" aria-valuemax="200"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>{ userData.pokemonData.name }</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="DataDiv" className="col">
            <img id="PokemonImg" src={ userData.pokemonData.sprites.back_default } alt={ userData.pokemonData.name } />
          </div>
        </div>
      </div>
    </div>
  )
}
import React from 'react';

import './FoePokemon.css'

export default (props) => {
  const foeData = props.foeData;
  const foePercentHealth = props.foePercentHealth;



  return(
    <div className="container-auto">
      <div className="row">
      <div id="FoeInfoBar" className="col-auto bg-light border border-dark border-3 rounded">
          <div className="row my-3">
            <div className="col">
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="200" aria-valuemin="0" aria-valuemax="200"></div>
              </div>
            </div>
          </div>
          <div className="row text-start">
            <div className="col text-capitalize">
              <h1>{ foeData.pokemonData.name }</h1>
            </div>
            <div className="col">
              <h1>{ foeData.health } / { foeData.health }</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="FoeImgDiv" className="col">
            <img id="FoeImg" src={ foeData.pokemonData.sprites.front_default } alt={ foeData.pokemonData.name } />
          </div>
        </div>
      </div>
    </div>
  )
}
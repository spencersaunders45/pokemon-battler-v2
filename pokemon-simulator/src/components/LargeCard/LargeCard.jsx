import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

import './LargeCard.css';
import Type from '../../components/Type/Type';

export default (props) => {
  const userPokemonData = props.userPokemonData;



  return(
    <div>
      {userPokemonData.name === undefined ? 
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h1>Select Your Pokemon</h1>
          </div>
        </div>
      </div>
      :
      <div id="Container" className="container mt-5">
        <div className="row">
          <h1 id="Name" className="mt-3" >{userPokemonData.name}</h1>
        </div>
        <div className="row">
          <img src={userPokemonData.sprites.other["official-artwork"].front_default} alt={ userPokemonData.name }/>
        </div>
        <div className="row mb-4 d-flex justify-content-center">
          <div className="col d-inline-flex justify-content-evenly text-white rounded">
            <Type type={ userPokemonData.types['0'].type.name } />
            {userPokemonData.types['1'] === undefined ? null : <Type type={ userPokemonData.types['1'].type.name } />}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
          <Link className="btn btn-danger px-5" to={"/moves"}>Select Moves</Link>
          </div>
        </div>
      </div>
      }
    </div>
  )
}
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './SmallCard.css';
import Type from '../../components/Type/Type';

export default (props) => {
  const pokemonName = props.pokemonName;
  const updatePokemon = props.updatePokemon;
  const [pokemonData, setPokemonData] = useState({});
  const [loaded, setLoaded] = useState(false);



  // Set pokemonData
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then(res => setPokemonData(res.data))
      .then(setLoaded(true))
  }, [loaded])


  // Changes userPokemon
  const selectPokemon = () => {
    updatePokemon(pokemonData);
  }



  return(
    <div>
      {pokemonData.name === undefined ?

      <h1>waitng for data...</h1> :

      <div id="CardContainer" className="container me-5 my-5">
        {/* Name */}
        <div className="row">
          <h1 id="CardName" className="mt-3" >{pokemonData.name}</h1>
        </div>
        {/* Image */}
        <div className="row">
          <img id="CardImg" className="mx-auto" src={pokemonData.sprites.front_default} alt={"Front view of " + pokemonData.name}/>
        </div>
        {/* Types */}
        <div className="row mb-4 d-flex justify-content-center">
          <div className="col d-inline-flex justify-content-evenly">
            <Type type={ pokemonData.types['0'].type.name } />
            {pokemonData.types['1'] === undefined ? null : <Type type={ pokemonData.types['1'].type.name } />}
          </div>
        </div>
        <div>
          <button onClick={ selectPokemon } className="btn btn-danger mb-3">Select</button>
        </div>
      </div>
      }
    </div>
  )
}
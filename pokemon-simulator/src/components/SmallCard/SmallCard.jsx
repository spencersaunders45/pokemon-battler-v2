import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './SmallCard.css';

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


    // Sets background color for type1
    const findTypeColor1 = () => {
      let type = pokemonData.types['0'].type.name;
      if(type === "normal"){
        return "gray"
      } else if(type === "fire") {
        return "red"
      } else if(type === "water"){
        return "DodgerBlue"
      } else if(type === "electric"){
        return "yellow"
      } else if(type === "grass"){
        return "ForestGreen"
      } else if(type === "ice"){
        return "DeepSkyBlue"
      } else if(type === "fighting"){
        return "FireBrick"
      } else if(type === "poison"){
        return "DarkViolet"
      } else if(type === "ground"){
        return "BurlyWood"
      } else if(type === "flying"){
        return "CornflowerBlue"
      } else if(type === "psychic"){
        return "HotPink"
      } else if(type === "bug"){
        return "Olive"
      } else if(type === "rock"){
        return "SandyBrown"
      } else if(type === "ghost"){
        return "RebeccaPurple"
      } else if(type === "dragon"){
        return "SlateBlue"
      } else if(type === "dark"){
        return "DarkSlateGrey"
      } else if(type === "steel"){
        return "DarkGrey"
      } else if(type === "fairy"){
        return "LightPink"
      }
    }
  
  
  
    // Sets background color for type2
    const findTypeColor2 = () => {
      let type = pokemonData.types['1'].type.name;
      if(type === "normal"){
        return "gray"
      } else if(type === "fire") {
        return "red"
      } else if(type === "water"){
        return "DodgerBlue"
      } else if(type === "electric"){
        return "yellow"
      } else if(type === "grass"){
        return "ForestGreen"
      } else if(type === "ice"){
        return "DeepSkyBlue"
      } else if(type === "fighting"){
        return "FireBrick"
      } else if(type === "poison"){
        return "DarkViolet"
      } else if(type === "ground"){
        return "BurlyWood"
      } else if(type === "flying"){
        return "CornflowerBlue"
      } else if(type === "psychic"){
        return "HotPink"
      } else if(type === "bug"){
        return "Olive"
      } else if(type === "rock"){
        return "SandyBrown"
      } else if(type === "ghost"){
        return "RebeccaPurple"
      } else if(type === "dragon"){
        return "SlateBlue"
      } else if(type === "dark"){
        return "DarkSlateGrey"
      } else if(type === "steel"){
        return "DarkGrey"
      } else if(type === "fairy"){
        return "LightPink"
      }
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
          {(pokemonData.types).length === 1 ? 
            <div className="col-auto">
              <h1 className="text-white p-2 TypeText" style={{backgroundColor: findTypeColor1()}}>{pokemonData.types['0'].type.name}</h1>
            </div>
              :
            <div className="d-inline-flex justify-content-evenly">
              <h1 className="text-white p-2 TypeText" style={{backgroundColor: findTypeColor1()}} >{pokemonData.types['0'].type.name}</h1>
              <h1 className="text-white p-2 TypeText" style={{backgroundColor: findTypeColor2()}} >{pokemonData.types['1'].type.name}</h1>
            </div>}
        </div>
        <div>
          <button onClick={ selectPokemon } className="btn btn-danger mb-3">Select</button>
        </div>
      </div>
      }
    </div>
  )
}
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

import './LargeCard.css';

export default (props) => {
  const userPokemonData = props.userPokemonData;



  //sets the color for the first type
  const findTypeColor1 = () => {
    let type = userPokemonData.types['0'].type.name;
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

  //sets the color for the second type
  const findTypeColor2 = () => {
    let type = userPokemonData.types['1'].type.name;
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
            <h1 className="p-2 rounded Type" style={{backgroundColor: findTypeColor1()}} >{userPokemonData.types['0'].type.name}</h1>
            {userPokemonData.types['1'] === undefined ? null : <h1 className="p-2 rounded Type" style={{backgroundColor: findTypeColor2()}} >{userPokemonData.types['1'].type.name}</h1>}
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
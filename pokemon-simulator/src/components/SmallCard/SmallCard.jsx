import React from 'react';

import './SmallCard.css';

export default (props) => {
  const pokemonData = props.pokemonData;
  const pokemonNum = props.pokemonNum;


    // Sets background color for type1
    const findTypeColor1 = () => {
      let type = pokemonData[pokemonNum].types['0'].type.name;
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
      let type = pokemonData[pokemonNum].types['1'].type.name;
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
      {console.log(pokemonData[pokemonNum])}
      {pokemonData === undefined ?

      <h1>loading...</h1> :

      <div id="CardContainer" className="container me-5 my-5">
        {/* Name */}
        <div className="row">
          <h1 id="CardName" className="mt-3" >{pokemonData[pokemonNum].name}</h1>
        </div>
        {/* Image */}
        <div className="row">
          <img id="CardImg" className="mx-auto" src={pokemonData[pokemonNum].sprites.front_default} alt={"Front view of " + pokemonData[pokemonNum].name}/>
        </div>
        {/* Types */}
        <div className="row mb-4 d-flex justify-content-center">
          {(pokemonData[pokemonNum].types).length === 1 ? 
            <div className="col-auto">
              <h1 className="text-white p-2 TypeText" style={{backgroundColor: findTypeColor1()}}>{pokemonData[pokemonNum].types['0'].type.name}</h1>
            </div>
              :
            <div className="d-inline-flex justify-content-evenly">
              <h1 className="text-white p-2 TypeText" style={{backgroundColor: findTypeColor1()}} >{pokemonData[pokemonNum].types['0'].type.name}</h1>
              <h1 className="text-white p-2 TypeText" style={{backgroundColor: findTypeColor2()}} >{pokemonData[pokemonNum].types['1'].type.name}</h1>
            </div>}
        </div>
      </div>
      }
    </div>
  )
}
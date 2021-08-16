import React from 'react';
import { Link } from '@reach/router';

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
  
    const findTypeColor = (type) => {
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
    <div id="Container" className="container ms-5 mt-5">
      {/* <div className="row">
        <h1 id="Name" className="mt-3">{userPokemonData.name}</h1>
      </div>
      <div className="row">
        <img id="Img" src={userPokemonData.sprites.other["official-artwork"].front_default} alt={ "Front view of " + userPokemonData.name }/>
      </div>
      <div className="row mb-4 d-flex justify-content-center">
        {(userPokemonData.types).length === 1 ? 
          <div className="col-auto">
            <h1 className="text-white p-2 Type" style={{backgroundColor: findTypeColor1() }}>{userPokemonData.types['0'].type.name}</h1>
          </div> 
          :
          <div className="d-inline-flex justify-content-evenly">
            <h1 className="text-white p-2 Type" style={{backgroundColor: findTypeColor1() }} >{userPokemonData.types['0'].type.name}</h1>
            <h1 className="text-white p-2 Type" style={{backgroundColor: findTypeColor2() }} >{userPokemonData.types['1'].type.name}</h1>
          </div>}
      </div>
      <div className="row">
          <div className="col">
            <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType1) }}>{move1}</h3>
            <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType3) }}>{move3}</h3>
          </div>
          <div className="col">
            <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType2) }}>{move2}</h3>
            <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType4) }}>{move4}</h3>
          </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          {move1 === 'empty' ?
          <button className="btn btn-danger btn-lg px-5" disabled>Battle</button> :
          <Link className="btn btn-danger px-5" to={ "/battle" }>Battle</Link>}
        </div>
      </div> */}
    </div>
  )
}
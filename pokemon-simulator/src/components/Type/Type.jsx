import React from 'react';

import './Type.css';

export default (props) => {
  const type = props.type;
  const moveName = props.moveName;



  const findColor = () => {
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
    <div className="container">
      <div className="row">
        <div className="col">
          {moveName === undefined ? 
          <h1 id="TypeText" className="text-white p-2 TypeText" style={{backgroundColor: findColor() }}>{ type }</h1>
          :
          <h1 id="TypeText" className="text-white p-2 TypeText" style={{backgroundColor: findColor() }}>{ moveName }</h1>}
        </div>
      </div>
    </div>
  )
}
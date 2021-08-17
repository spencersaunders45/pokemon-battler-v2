import React from 'react';

import './SelectedMoves.css';

export default (props) => {
  const moveNum = props.moveNum;
  const moveData = props.moveData;
  const changeSelectedMove = props.changeSelectedMove;


  const setMove = () => {
    changeSelectedMove(moveNum);
  }



  const findColor = (type) => {
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
    <div className="container mb-3">
      <div className="row">
        <div className="col">
          {moveData.name === undefined ?
          <button onClick={ setMove } className="btn btn-outline-secondary p-2">Set this move</button>
          :
          <button onClick={ setMove } className="btn text-white p-2 TypeText" style={{backgroundColor: findColor(moveData.type.name) }}>{moveData.name}</button>
          }
        </div>
      </div>
    </div>
  )
}
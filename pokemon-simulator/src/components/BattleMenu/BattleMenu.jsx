import React, { useState } from 'react';

import './BattleMenu.css';

export default (props) => {
  const userData = props.userData;
  const attackTurn = props.attackTurn;
  const findMove = props.findMove;
  const userStatus = props.userStatus;
  const wakeUp = props.wakeUp;
  const [sleepCount, setSleepCount] = useState(0);



  const useMove = (moveData) => {
    if(attackTurn === 'user'){
      if(userStatus === 'sleep'){
        if(sleepCount > 3){
          wakeUp('user')
        }
        let R = Math.random * (1-0) + 0;

      }
      findMove(moveData, userData);
    }
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
    <div className="container bg-light rounded border border-dark border-3 p-3">
      <div className="row-auto justify-content-evenly d-flex mb-3">
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move1Data.type.name) }} >{ userData.move1Data.name }</button>
        </div>
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move2Data.type.name) }} >{ userData.move2Data.name }</button>
        </div>
      </div>
      <div className="row-auto justify-content-evenly d-flex">
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move3Data.type.name) }} >{ userData.move3Data.name }</button>
        </div>
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move4Data.type.name) }} >{ userData.move4Data.name }</button>
        </div>
      </div>
    </div>
  )
}
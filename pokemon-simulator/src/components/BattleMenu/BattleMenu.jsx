import React, { useState } from 'react';

import './BattleMenu.css';

export default (props) => {
  const userData = props.userData;
  const attackTurn = props.attackTurn;
  const findMove = props.findMove;
  const userStatus = props.userStatus;
  const wakeUp = props.wakeUp;
  const confused = props.confused;
  const notConfused = props.notConfused;
  const [sleepCount, setSleepCount] = useState(0);
  const [confusedCount, setConfusedCount] = useState(0);



  const useMove = (moveData) => {
    console.log('mad it')
    if(attackTurn === 'user'){
      if(userStatus === 'sleep'){
        if(sleepCount > 3){
          wakeUp('user');
          setSleepCount(0);
          findMove(moveData, userData);
          return;
        }
        let R = Math.random * (1-0) + 0;
        if(R === 0){
          wakeUp('user');
          setSleepCount(0);
          findMove(moveData, userData);
          return;
        } else {
          let temp = sleepCount + 1;
          setSleepCount(temp);
          return;
        }
      }
      if(userStatus === 'confused'){
        let R = Math.random * (1-0) + 0;
        if(R === 0){
          notConfused('user');
          setConfusedCount(0);
          findMove(moveData, userData);
          return;
        } else {
          setConfusedCount(confusedCount + 1);
          confused(userData, 'user');
          return;
        }
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
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move1Data.type.name) }} onClick={ useMove(userData.move1Data) } >{ userData.move1Data.name }</button>
        </div>
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move2Data.type.name) }} onClick={ useMove(userData.move2Data) } >{ userData.move2Data.name }</button>
        </div>
      </div>
      <div className="row-auto justify-content-evenly d-flex">
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move3Data.type.name) }} onClick={ useMove(userData.move3Data) } >{ userData.move3Data.name }</button>
        </div>
        <div className="col m-1">
          <button className="text-light btn p-2 form-control" style={{ backgroundColor: findColor(userData.move4Data.type.name) }} onClick={ useMove(userData.move4Data) } >{ userData.move4Data.name }</button>
        </div>
      </div>
    </div>
  )
}
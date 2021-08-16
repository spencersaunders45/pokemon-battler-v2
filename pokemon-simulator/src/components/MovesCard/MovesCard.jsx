import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './MovesCard.css';
import Type from '../../components/Type/Type';

export default (props) => {
  const moveName = props.move;
  const [moveData, setMoveData] = useState({});
  const [loaded, setLoaded] = useState(false);



  // Sets move data
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/move/" + moveName)
      .then(res => setMoveData(res.data))
      .then(setLoaded(true))
  }, [loaded]);



  const findEnglishMoveDesc = () => {
    for(let i = 0; i < (moveData.flavor_text_entries).length; i++){
      if(moveData.flavor_text_entries[i].language.name === "en"){
        return moveData.flavor_text_entries[i].flavor_text;
      }
    }
    return "No English description found."
  }



  return(
    <div>
      {/* {console.log(moveData)} */}
      {moveData.type === undefined ? <h1>wating for data...</h1> :
      <div id="Container" className="container me-5 my-5" >
        <div className="row mt-3">
          <Type className="" type={ moveData.type.name } moveName={ moveName } />
        </div>
        <div className="row">
          <div className="col">
            <h4 className="mt-3">Type: {moveData.type.name}</h4>
            <h4 className="mt-3">PP: {moveData.pp}</h4>
          </div>
          <div className="col">
            {moveData.accuracy === null ? <h4>Accuracy: Infinity</h4> : <h4>Accuracy: {moveData.accuracy}</h4>}
            {moveData.power === null ? <h4>Power: None</h4> : <h4>Power: {moveData.power}</h4>}
          </div>
          <div className="row">
            <p className="my-3">{findEnglishMoveDesc()}</p>
          </div>
          <div>
            {/* <button onClick={setMoveSelect} className="btn btn-success my-3">Select Move</button> */}
          </div>
        </div>
      </div>
      }
    </div>
  )
}
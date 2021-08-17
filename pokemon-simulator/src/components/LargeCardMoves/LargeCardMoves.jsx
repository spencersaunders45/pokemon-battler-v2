import React from 'react';
import { Link } from '@reach/router';

import Type from '../Type/Type';

export default (props) => {
  const userPokemonData = props.userPokemonData;



  return(
    <div id="Container" className="container ms-5 mt-5">
      <div className="row">
        <h1 id="Name" className="mt-3">{userPokemonData.name}</h1>
      </div>
      <div className="row">
        <img id="Img" src={userPokemonData.sprites.other["official-artwork"].front_default} alt={ "Front view of " + userPokemonData.name }/>
      </div>
      <div className="row mb-4 d-flex justify-content-center">
        <div className="col">
          <Type type={ userPokemonData.types['0'].type.name } />
          {userPokemonData.types['1'].type.name === undefined ? null : <Type type={ userPokemonData.types['1'].type.name } />}
        </div>
      </div>
      <div className="row">
          <div className="col">
            {/* <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType1) }}>{move1}</h3>
            <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType3) }}>{move3}</h3> */}
          </div>
          <div className="col">
            {/* <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType2) }}>{move2}</h3>
            <h3 className="text-white p-2 my-3 form-control Type" style={{backgroundColor: findTypeColor(moveType4) }}>{move4}</h3> */}
          </div>
      </div>
      <div className="row mb-3">
        {/* <div className="col">
          {move1 === 'empty' ?
          <button className="btn btn-danger btn-lg px-5" disabled>Battle</button> :
          <Link className="btn btn-danger px-5" to={ "/battle" }>Battle</Link>}
        </div> */}
      </div>
    </div>
  )
}
import React from 'react';

export default (props) => {
  const userData = props.userData;

  console.log(userData)

  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>{ userData.move1Data.name }</h4>
        </div>
        <div className="col">
          <h4>{ userData.move2Data.name }</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>{ userData.move3Data.name }</h4>
        </div>
        <div className="col">
          <h4>{ userData.move4Data.name }</h4>
        </div>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react';

import './Battle.css'
import BackGround_v2 from '../../images/BattleBackground-v2.jfif';
import UserPokemon from '../../components/UserPokemon/UserPokemon';
import FoePokemon from '../../components/FoePokemon/FoePokemon';
import BattleMenu from '../../components/BattleMenu/BattleMenu';

export default (props) => {
  const userData = props.userData;
  const foeData = props.foeData;
  const [stage, setStage] = useState();
  const [weather, setWeather] = useState();
  const [userHealth, setUserHealth] = useState();
  const [foeHealth, setFoeHealth] = useState();
  const [turn, setTurn] = useState(0);
  const [attackTurn, setAttackTurn] = useState(null);
  const [win, setWin] = useState('fight');
  const [loaded, setLoaded] = useState(false);
  const [foeStatus, setFoeStatus] = useState('healthy');
  const [userStatus, setUserStatus] = useState('healthy');



  // sets state for user and foe health
  useEffect(() => {
    setUserHealth(userData.health);
    setFoeHealth(foeData.health);
  }, [loaded])



  // decides who makes the attack first per turn
  useEffect(() => {
    if(userData.speed > foeData.speed){
      setAttackTurn('user');
    } else if(userData.speed < foeData.speed){
      setAttackTurn('foe');
    } else {
      setAttackTurn('user');
    }
  }, [turn])



  // Checks user and foe health
  useEffect(() => {
    if(userHealth <= 0){
      setWin('foe');
    } else if(foeHealth <= 0){
      setWin('user');
    }
  }, [userHealth, foeHealth])



  // applies damage for status effects
  useEffect(() => {
    if(foeStatus === 'burn'){
      setFoeHealth(burned(foeData.health, foeHealth));
    }
    if(userStatus === 'burn'){
      setUserHealth(burned(userData.health, userHealth))
    }
  }, [turn])



  const moveDamage = (power, att, def, moveType, type1, type2) => {
    let weatherBonus = 1;
    let typeBonus = 1;
    if(weather === 'rain' && moveType === 'water'){
      weatherBonus = 1.5;
    } else if(weather === 'sunny' && moveType === 'fire'){
      weatherBonus = 1.5;
    }
    if(moveType === 'fire' && type1 ==='grass' || type2 === 'grass'){
      typeBonus = 2;
    } else if(moveType === 'electric' && type1 === 'flying' || type2 === 'flying' || type1 === 'water' || type2 === 'water'){
      typeBonus = 2;
    } else if(moveType === 'grass' && type1 === 'water' || type2 === 'water'){
      typeBonus = 2;
    } else if(moveType === 'psychic' && type1 === 'ghost' || type2 === 'ghost'){
      typeBonus = 2;
    } else if(moveType === 'water' && type1 === 'fire' || type2 === 'fire'){
      typeBonus = 2;
    } else if(moveType === 'fire' && type1 === 'water' || type2 === 'water'){
      typeBonus = .5;
    } else if(moveType === 'ghost' && type1 === 'psychic' || type2 === 'psychic'){
      typeBonus = .5;
    } else if(moveType === 'grass' && type1 === 'fire' || type2 === 'fire'){
      typeBonus = .5;
    }
    let damage = (((power*(att/def))/50)+2)*weatherBonus*typeBonus
    return(damage);
  }



  // determinds if move hits or misses
  const accuracyCheck = (accuracy) => {
    let R = Math.random() * (255-0) + 0;
    let accuracyMod = accuracy * stage;
    if(R <= accuracyMod){
      return(true);
    } else {
      return(false);
    }
  }



  const burned = (maxHealth, currentHealth) => {
    return(currentHealth - (maxHealth * .0625))
  }



  const wakeUp = (player) => {
    if(player === 'user'){
      setUserStatus('healthy');
    }
    if(player === 'foe'){
      setFoeStatus('healthy');
    }
  }

  const confused = (pokeData, player) => {
    let damage = (((40*(pokeData.att/pokeData.def))/50)+2);
    if(player === 'user'){
      setUserHealth(userHealth - damage);
    } else if(player === 'foe'){
      setFoeHealth(foeHealth - damage);
    }
  }

  const notConfused = (player) => {
    if(player === 'user'){
      setUserStatus('healthy');
    }
    if(player === 'foe'){
      setFoeStatus('healthy');
    }
  }



  const findMove = (moveData, pokeData, otherData) => {
    if(moveData.name === 'flamethrower'){
      flamethrower(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    }else if(moveData.name === 'smokescreen'){
      smokeScreen(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'growl'){
      growl(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'sleep-powder'){
      sleepPowder(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'tackle'){
      tackle(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'solar-beam'){
      solarBeam(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'razor-leaf'){
      razorLeaf(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'take-down'){
      takeDown(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'sunny-day'){
      sunnyDay(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'slash'){
      slash(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'fire-spin'){
      fireSpin(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'scratch'){
      scratch(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'protect'){
      protect(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'rain-dance'){
      rainDance(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'bite'){
      bite(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'hydro-pump'){
      hydroPump(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'aqua-tail'){
      aquaTail(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'disable'){
      disable(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'recover'){
      recover(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'psychic'){
      psychic(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'psybeam'){
      psybeam(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'thunder-punch'){
      thunderPunch(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'swift'){
      swift(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    }  else if(moveData.name === 'confuseRay'){
      confuseRay(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'shadow-ball'){
      shadowBall(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'shadow-punch'){
      shadowPunch(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'dark-pulse'){
      darkPulse(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    } else if(moveData.name === 'thief'){
      thief(moveData.power, pokeData.attack, otherData.def, moveData.type, moveData.accuracy, otherData.type1, otherData.type2 = null);
    }
  }



  const flamethrower = (power, att, def, moveType, accuracy, type1, type2) => {
    console.log('here')
    let health = null;
    let hit = accuracyCheck(accuracy);
    if(hit === true){
      if(attackTurn === 'user'){
        health = foeHealth;
      } else {
        health = userHealth;
      }
      let damage = moveDamage(power, att, def, moveType, type1, type2);
      let newHealth = health - damage;
      if(attackTurn === 'user'){
        setFoeHealth(newHealth);
      } else {
        setUserHealth(newHealth);
      }
    } else {
      return('missed');
    }
  }

  const smokeScreen = () => {
    let hit = accuracyCheck()
  }

  const growl = () => {

  }

  const sleepPowder = () => {
    
  }

  const tackle = () => {
    
  }

  const solarBeam = () => {
    
  }

  const razorLeaf = () => {
    
  }

  const takeDown = () => {
    
  }

  const sunnyDay = () => {
    
  }

  const slash = () => {
    
  }

  const fireSpin = () => {
    
  }

  const scratch = () => {
    
  }

  const protect = () => {
    
  }

  const rainDance = () => {
    
  }

  const bite = () => {
    
  }

  const hydroPump = () => {
    
  }

  const aquaTail = () => {
    
  }

  const disable = () => {
    
  }

  const recover = () => {
    
  }

  const psychic = () => {
    
  }

  const psybeam = () => {
    
  }

  const thunderPunch = () => {
    
  }

  const swift = () => {
    
  }

  const confuseRay = () => {
    
  }

  const shadowBall = () => {
    
  }

  const shadowPunch = () => {
    
  }

  const darkPulse = () => {
    
  }

  const thief = () => {
    
  }



  return(
    <div id="BattleContainer" className="container-fluid p-5" style={{ backgroundImage: `url(${BackGround_v2})` }}>
      <div className="row align-items-end DataRows">
        <div className="col d-flex justify-content-evenly">
          <FoePokemon foeData={ foeData } health={ foeHealth } attackTurn={ attackTurn } findMove={ findMove } />
        </div>
      </div>
      <div className="row align-items-end justify-content-evenly">
        <div className="col-auto">
          <UserPokemon userData={ userData } health={ userHealth } />
        </div>
        <div className="col-auto">
          <BattleMenu userData={ userData } setAttackTurn={ attackTurn } findMove={ findMove } userStatus={ userStatus } wakeUp={ wakeUp } confused={ confused } notConfused={ notConfused } />
        </div>
      </div>
    </div>
  )
}
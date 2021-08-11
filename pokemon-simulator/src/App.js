import './App.css';
import axios from 'axios'
import { Router } from '@reach/router'
import { useEffect, useState } from 'react';

import Main from './views/Main/Main';
import Battle from './views/Battle/Battle';
import MoveSelector from './views/MoveSelector/MoveSelector';

function App() {
  const pokemon = ["venusaur", "charizard", "blastoise", "alakazam", "gengar"]
  const moves = {venusaur: ["growl", "sleep powder", "tackle", "solar beam", "razor leaf", "take down"], charizard: ["smokescreen", "sunny day", "flamethrower", "slash", "fire spin", "scratch"], blastoise: ["protect", "rain dance", "bite", "hydro pump", "tackle", "aqua tail"], alakazam: ["disable", "recover", "psychic", "psybeam", "thunder punch", "swift"], gengar: ["confuse ray", "protect", "shadow ball", "shadow punch", "dark pulse", "thief"]};
  const [weather, useWeather] = useState('');
  // ---------------------------------------------------
  const [userPokemon, setUserPokemon] = useState('');
  const [userType1, setUserType1] = useState('');
  const [userType2, setUserType2] = useState(null);
  const [userHealth, setUserHealth] = useState(null);
  const [userStatus, setUserStatus] = useState('healthy');
  const [userAttack, setUserAttack] = useState(null);
  const [userDef, setUserDef] = useState(null);
  const [userSpecAtt, setUserSpecAtt] = useState(null);
  const [userSpecDef, setUserSpecDef] = useState(null);
  const [userMove1, setUserMove1] = useState(null);
  const [userMove2, setUserMove2] = useState(null);
  const [userMove3, setUserMove3] = useState(null);
  const [userMove4, setUserMove4] = useState(null);
  const [userMove1pp, setUserMove1pp] = useState(null);
  const [userMove2pp, setUserMove2pp] = useState(null);
  const [userMove3pp, setUserMove3pp] = useState(null);
  const [userMove4pp, setUserMove4pp] = useState(null);
  const [userMove1Type, setUserMove1Type] = useState('');
  const [userMove2Type, setUserMove2Type] = useState('');
  const [userMove3Type, setUserMove3Type] = useState('');
  const [userMove4Type, setUserMove4Type] = useState('');
  // ----------------------------------------------------
  const [foePokemon, setFoePokemon] = useState('');
  const [foeType1, setFoeType1] = useState('');
  const [foeType2, setFoeType2] = useState(null);
  const [foeHealth, setFoeHealth] = useState(null);
  const [foeStatus, setFoeStatus] = useState('healthy');
  const [foeAttack, setFoeAttack] = useState(null);
  const [foeDef, setFoeDef] = useState(null);
  const [foeSpecAtt, setFoeSpecAtt] = useState(null);
  const [foeSpecDef, setFoeSpecDef] = useState(null);
  const [foeMove1, setFoeMove1] = useState('');
  const [foeMove2, setFoeMove2] = useState('');
  const [foeMove3, setFoeMove3] = useState('');
  const [foeMove4, setFoeMove4] = useState('');
  const [foeMove1pp, setFoeMove1pp] = useState(null);
  const [foeMove2pp, setFoeMove2pp] = useState(null);
  const [foeMove3pp, setFoeMove3pp] = useState(null);
  const [foeMove4pp, setFoeMove4pp] = useState(null);
  const [foeMove1Type, setFoeMove1Type] = useState('');
  const [foeMove2Type, setFoeMove2Type] = useState('');
  const [foeMove3Type, setFoeMove3Type] = useState('');
  const [foeMove4Type, setFoeMove4Type] = useState('');
  // --------------------------------------------------
  const [loaded, setLoaded] = useState(false);
  const [loadedPokemon, setLoadedPokemon] = useState(false);



  // Set foe pokemon
  useEffect(() => {
    let num = Math.floor(Math.random() * pokemon.length);
    setFoePokemon(pokemon[num]);
    setLoadedPokemon(true);
  }, [loadedPokemon])



  // Set foeMoves
  useEffect(() => {
    if(foePokemon !== ''){
      let keys = [], numbers = [], x, total = 0;
      while(total < 4) {
          x = Math.floor(Math.random() * 6);
          if(keys[x] == undefined) { 
              keys[x] = 1;
              numbers.push(x);
              total++;
          }
      }
      setFoeMove1(moves[foePokemon][numbers[0]]);
      setFoeMove2(moves[foePokemon][numbers[1]]);
      setFoeMove3(moves[foePokemon][numbers[2]]);
      setFoeMove4(moves[foePokemon][numbers[3]]);
    }
  }, [foePokemon])



  return (
    <div className="App">
      {console.log(foeMove1, foeMove2, foeMove3, foeMove4)}
      <Router>
        <Main path="/" />
        <MoveSelector path="/move-selection" />
        <Battle path="battle" />
      </Router>
    </div>
  );
}

export default App;

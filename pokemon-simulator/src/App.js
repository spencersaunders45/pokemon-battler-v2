import './App.css';
import axios from 'axios'
import { Router } from '@reach/router'
import { useEffect, useState } from 'react';

import Main from './views/Main/Main';
import Battle from './views/Battle/Battle';
import MoveSelector from './views/MoveSelector/MoveSelector';

function App() {
  const pokemon = ["venusaur", "charizard", "blastoise", "alakazam", "gengar"]
  const moves = {"venusaur": ["growl", "sleep powder", "tackle", "solar beam", "razor leaf", "take down"], "charizard": ["smokescreen", "sunny day", "flamethrower", "slash", "fire spin", "scratch"], "blastoise": ["protect", "rain dance", "bite", "hydro pump", "tackle", "aqua tail"], "alakazam": ["disable", "recover", "psychic", "psybeam", "thunder punch", "swift"], "gengar": ["confuse ray", "protect", "shadow ball", "shadow punch", "dark pulse", "thief"]}
  const [weather, useWeather] = useState('');
  const [loaded, setLoaded] = useState(false);
  // ---------------------------------------------------
  const [userPokemon, setUserPokemon] = useState('');
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
  // ----------------------------------------------------
  const [foePokemon, setFoePokemon] = useState('');
  const [foeHealth, setFoeHealth] = useState(null);
  const [foeStatus, setFoeStatus] = useState('healthy');
  const [foeAttack, setFoeAttack] = useState(null);
  const [foeDef, setFoeDef] = useState(null);
  const [foeSpecAtt, setFoeSpecAtt] = useState(null);
  const [foeSpecDef, setFoeSpecDef] = useState(null);
  const [foeMove1, setFoeMove1] = useState(null);
  const [foeMove2, setFoeMove2] = useState(null);
  const [foeMove3, setFoeMove3] = useState(null);
  const [foeMove4, setFoeMove4] = useState(null);


  useEffect(() => {
    num = Math.floor(Math.random() * pokemon.length);
  }, [loaded])


  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <MoveSelector path="/move-selection" />
        <Battle path="battle" />
      </Router>
    </div>
  );
}

export default App;

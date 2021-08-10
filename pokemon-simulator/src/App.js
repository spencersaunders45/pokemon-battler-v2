import './App.css';
import axios from 'axios'
import { Router } from '@reach/router'
import { useEffect, useState } from 'react';

import Main from './views/Main/Main';
import Battle from './views/Battle/Battle';
import MoveSelector from './views/MoveSelector/MoveSelector';

function App() {
  const pokemon = ["venusaur", "charizard", "blastoise", "alakazam", "gengar"]
  const [userPokemon, setUserPokemon] = useState('');
  const [userHealth, setUserHealth] = useState(null);
  const [userStatus, setUserStatus] = useState('healthy');
  const [userAttack, setUserAttack] = useState(null);
  const [userDef, setUserDef] = useState(null);
  const [userSpecAtt, setUserSpecAtt] = useState(null);
  const [userSpecDef, setUserSpecDef] = useState(null);
  const [foePokemon, setFoePokemon] = useState('');
  const [foeHealth, setFoeHealth] = useState(null);
  const [foeStatus, setFoeStatus] = useState('healthy');
  const [foeAttack, setFoeAttack] = useState(null);
  const [foeDef, setFoeDef] = useState(null);
  const [foeSpecAtt, setFoeSpecAtt] = useState(null);
  const [foeSpecDef, setFoeSpecDef] = useState(null);


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

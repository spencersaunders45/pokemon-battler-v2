import './App.css';
import axios from 'axios'
import { Router } from '@reach/router'
import { useEffect, useState } from 'react';

import Main from './views/Main/Main';
import Battle from './views/Battle/Battle';
import MoveSelector from './views/MoveSelector/MoveSelector';

function App() {
  const pokemon = ["venusaur", "charizard", "blastoise", "alakazam", "gengar"]
  const moves = {venusaur: ["growl", "sleep-powder", "tackle", "solar-beam", "razor-leaf", "take-down"], charizard: ["smokescreen", "sunny-day", "flamethrower", "slash", "fire-spin", "scratch"], blastoise: ["protect", "rain-dance", "bite", "hydro-pump", "tackle", "aqua-tail"], alakazam: ["disable", "recover", "psychic", "psybeam", "thunder-punch", "swift"], gengar: ["confuse-ray", "protect", "shadow-ball", "shadow-punch", "dark-pulse", "thief"]};
  // ---------------------------------------------------
  const [userPokemon, setUserPokemon] = useState('charizard');
  const [userPokemonData, setUserPokemonData] = useState({});
  const [userHealth, setUserHealth] = useState(null);
  const [userAttack, setUserAttack] = useState(null);
  const [userDef, setUserDef] = useState(null);
  const [userSpecAtt, setUserSpecAtt] = useState(null);
  const [userSpecDef, setUserSpecDef] = useState(null);
  const [userSpeed, setUserSpeed] = useState(null);
  const [userMove1pp, setUserMove1pp] = useState(null);
  const [userMove2pp, setUserMove2pp] = useState(null);
  const [userMove3pp, setUserMove3pp] = useState(null);
  const [userMove4pp, setUserMove4pp] = useState(null);
  const [userMove1Data, setUserMove1Data] = useState({});
  const [userMove2Data, setUserMove2Data] = useState({});
  const [userMove3Data, setUserMove3Data] = useState({});
  const [userMove4Data, setUserMove4Data] = useState({});
  const [userData, setUserData] = useState({});
  // ----------------------------------------------------
  const [foePokemon, setFoePokemon] = useState('');
  const [foePokemonData, setFoePokemonData] = useState({});
  const [foeHealth, setFoeHealth] = useState(null);
  const [foeAttack, setFoeAttack] = useState(null);
  const [foeDef, setFoeDef] = useState(null);
  const [foeSpecAtt, setFoeSpecAtt] = useState(null);
  const [foeSpecDef, setFoeSpecDef] = useState(null);
  const [foeSpeed, setFoeSpeed] = useState(null);
  const [foeMove1, setFoeMove1] = useState('');
  const [foeMove2, setFoeMove2] = useState('');
  const [foeMove3, setFoeMove3] = useState('');
  const [foeMove4, setFoeMove4] = useState('');
  const [foeMove1pp, setFoeMove1pp] = useState(null);
  const [foeMove2pp, setFoeMove2pp] = useState(null);
  const [foeMove3pp, setFoeMove3pp] = useState(null);
  const [foeMove4pp, setFoeMove4pp] = useState(null);
  const [foeMove1Data, setFoeMove1Data] = useState({});
  const [foeMove2Data, setFoeMove2Data] = useState({});
  const [foeMove3Data, setFoeMove3Data] = useState({});
  const [foeMove4Data, setFoeMove4Data] = useState({});
  const [foeData, setFoeData] = useState({});
  // --------------------------------------------------
  const [loadedPokemon, setLoadedPokemon] = useState(false);



  // Set foePokemon
  useEffect(() => {
    let num = Math.floor(Math.random() * pokemon.length);
    setFoePokemon(pokemon[num]);
    setLoadedPokemon(true);
  }, [loadedPokemon]);



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
  }, [foePokemon]);



  // Set foeMoveData
  useEffect(() => {
    if(foeMove4 !== ''){
      axios.get("https://pokeapi.co/api/v2/move/" + foeMove1)
        .then(res => setFoeMove1Data(res.data));
      axios.get("https://pokeapi.co/api/v2/move/" + foeMove2)
        .then(res => setFoeMove2Data(res.data));
      axios.get("https://pokeapi.co/api/v2/move/" + foeMove3)
        .then(res => setFoeMove3Data(res.data));
      axios.get("https://pokeapi.co/api/v2/move/" + foeMove4)
        .then(res => setFoeMove4Data(res.data));
    }
  }, [foeMove4]);



  // Set foeMovepp
  useEffect(() => {
    if(foeMove4Data !== undefined){
      setFoeMove1pp(foeMove1Data.pp);
      setFoeMove2pp(foeMove2Data.pp);
      setFoeMove3pp(foeMove3Data.pp);
      setFoeMove4pp(foeMove4Data.pp);
    }
  }, [foeMove4Data]);



  // Set foePokemonData
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + foePokemon)
      .then(res => setFoePokemonData(res.data))
  }, [foePokemon]);



  // Set all other foe data
  useEffect(() => {
    if(foePokemonData.stats !== undefined){
      setFoeHealth(foePokemonData.stats[0].base_stat);
      setFoeAttack(foePokemonData.stats[1].base_stat);
      setFoeDef(foePokemonData.stats[2].base_stat);
      setFoeSpecAtt(foePokemonData.stats[3].base_stat);
      setFoeSpecDef(foePokemonData.stats[4].base_stat);
      setFoeSpeed(foePokemonData.stats[5].base_stat);
    }
  }, [foePokemonData]);



  // update user pokemon+
  const updatePokemon = (pokemon) => {
    setUserPokemonData(pokemon);
    setUserPokemon(pokemon.name);
  };



  // addes userPokemonData
  useEffect(() => {
    if(userPokemonData.stats !== undefined){
      setUserHealth(userPokemonData.stats[0].base_stat);
      setUserAttack(userPokemonData.stats[1].base_stat);
      setUserDef(userPokemonData.stats[2].base_stat);
      setUserSpecAtt(userPokemonData.stats[3].base_stat);
      setUserSpecDef(userPokemonData.stats[4].base_stat);
      setUserSpeed(userPokemonData.stats[5].base_stat);
    }
  }, [userPokemon]);



  // Sets userMoves
  const setUserMoves = (num, moveData) => {
    if(num === 1){
      setUserMove1Data(moveData);
      setUserMove1pp(moveData.pp);
    } else if(num === 2){
      setUserMove2Data(moveData);
      setUserMove2pp(moveData.pp);
    } else if(num === 3){
      setUserMove3Data(moveData);
      setUserMove3pp(moveData.pp);
    } else if(num === 4){
      setUserMove4Data(moveData);
      setUserMove4pp(moveData.pp);
    }
  };



  // set user and foe Data
  const setUserFoeData = () => {
    setUserData({
      pokemonData: userPokemonData,
      health: userHealth,
      status: 'healthy',
      attack: userAttack,
      def: userDef,
      specAtt: userSpecAtt,
      specDef: userSpecDef,
      speed: userSpeed,
      move1pp: userMove1pp,
      move2pp: userMove2pp,
      move3pp: userMove3pp,
      move4pp: userMove4pp,
      move1Data: userMove1Data,
      move2Data: userMove2Data,
      move3Data: userMove3Data,
      move4Data: userMove4Data
    });
    setFoeData({
      pokemonData: foePokemonData,
      health: foeHealth,
      status: 'healthy',
      attack: foeAttack,
      def: foeDef,
      specAtt: foeSpecAtt,
      specDef: foeSpecDef,
      speed: foeSpeed,
      move1pp: foeMove1pp,
      move2pp: foeMove2pp,
      move3pp: foeMove3pp,
      move4pp: foeMove4pp,
      move1Data: foeMove1Data,
      move2Data: foeMove2Data,
      move3Data: foeMove3Data,
      move4Data: foeMove4Data
    });
  };



  return (
    <div className="App">
      <Router>
        <Main path="/" pokemonList={ pokemon } userPokemonData={ userPokemonData } updatePokemon={ updatePokemon } />
        <MoveSelector path="/moves" pokemonMoves={ moves[userPokemon] } userPokemonData={ userPokemonData } userMove1Data={ userMove1Data } userMove2Data={ userMove2Data } userMove3Data={ userMove3Data } userMove4Data={ userMove4Data } setUserMoves={ setUserMoves } setUserFoeData={ setUserFoeData } />
        <Battle path="/battle" userData={ userData } foeData={ foeData } />
      </Router>
    </div>
  );
};

export default App;

import './App.css';
import axios from 'axios'
import { Router } from '@reach/router'
import { useEffect, useState } from 'react';

import Main from './views/Main/Main';
import Battle from './views/Battle/Battle';
import MoveSelector from './views/MoveSelector/MoveSelector';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  // venusaur = 2 | charizard = 5 | blastoise = 8 | alakazam = 64 | gengar = 93
  const pokemon = ["venusaur", "charizard", "blastoise", "alakazam", "gengar"]
  const moves = {venusaur: ["growl", "sleep-powder", "tackle", "solar-beam", "razor-leaf", "take-down"], charizard: ["smokescreen", "sunny-day", "flamethrower", "slash", "fire-spin", "scratch"], blastoise: ["protect", "rain-dance", "bite", "hydro-pump", "tackle", "aqua-tail"], alakazam: ["disable", "recover", "psychic", "psybeam", "thunder-punch", "swift"], gengar: ["confuse-ray", "protect", "shadow-ball", "shadow-punch", "dark-pulse", "thief"]};
  const [weather, useWeather] = useState('');
  // ---------------------------------------------------
  const [userPokemon, setUserPokemon] = useState('charizard');
  const [userPokemonData, setUserPokemonData] = useState({});
  const [userHealth, setUserHealth] = useState(null);
  const [userStatus, setUserStatus] = useState('healthy');
  const [userAttack, setUserAttack] = useState(null);
  const [userDef, setUserDef] = useState(null);
  const [userSpecAtt, setUserSpecAtt] = useState(null);
  const [userSpecDef, setUserSpecDef] = useState(null);
  const [userSpeed, setUserSpeed] = useState(null);
  const [userMove1, setUserMove1] = useState('');
  const [userMove2, setUserMove2] = useState('');
  const [userMove3, setUserMove3] = useState('');
  const [userMove4, setUserMove4] = useState('');
  const [userMove1pp, setUserMove1pp] = useState(null);
  const [userMove2pp, setUserMove2pp] = useState(null);
  const [userMove3pp, setUserMove3pp] = useState(null);
  const [userMove4pp, setUserMove4pp] = useState(null);
  const [userMove1Data, setUserMove1Data] = useState({});
  const [userMove2Data, setUserMove2Data] = useState({});
  const [userMove3Data, setUserMove3Data] = useState({});
  const [userMove4Data, setUserMove4Data] = useState({});
  // ----------------------------------------------------
  const [foePokemon, setFoePokemon] = useState('');
  const [foePokemonData, setFoePokemonData] = useState({});
  const [foeHealth, setFoeHealth] = useState(null);
  const [foeStatus, setFoeStatus] = useState('healthy');
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
  // --------------------------------------------------
  const [loaded, setLoaded] = useState(false);
  const [loadedPokemon, setLoadedPokemon] = useState(false);



  // Set foePokemon
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
  }, [foeMove4])



  // Set foeMovepp
  useEffect(() => {
    if(foeMove4Data !== undefined){
      setFoeMove1pp(foeMove1Data.pp);
      setFoeMove2pp(foeMove2Data.pp);
      setFoeMove3pp(foeMove3Data.pp);
      setFoeMove4pp(foeMove4Data.pp);
    }
  }, [foeMove4Data])



  // Set foePokemonData
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + foePokemon)
      .then(res => setFoePokemonData(res.data))
  }, [foePokemon])



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
  }, [foePokemonData])



  // update user pokemon+
  const updatePokemon = (pokemon) => {
    setUserPokemonData(pokemon);
    setUserPokemon(pokemon.name);
  }



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
  }, [userPokemon])



  return (
    <div className="App">
      <Router>
        <Main path="/" pokemonList={ pokemon } userPokemonData={ userPokemonData } updatePokemon={ updatePokemon } />
        <MoveSelector path="/moves" pokemonMoves={ moves[userPokemon] } userPokemonData={ userPokemonData } />
        <Battle path="/battle" />
      </Router>
    </div>
  );
}

export default App;

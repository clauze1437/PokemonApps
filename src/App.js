import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "", 
        species: "", 
        img: "", 
        hp: "",
        attack: "",
        defense: "",
        types: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
      setPokemon({name: pokemonName, 
        species: response.data.species.name, 
        img: response.data.sprites.front_default,
        types: response.data.types[0].type.name, 
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        weight: response.data.weight,
        height: response.data.height,
        abilities: response.data.abilities[0].ability.name,
        moves: response.data.moves[0].move.name,
        stats: response.data.stats[0].base_stat,
      });
      setPokemonChosen(true);
    })
  }


  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon Apps</h1>
        <input type="text" onChange={(event) => {setPokemonName(event.target.value);
        }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    <div className="DisplaySection">
      {!pokemonChosen ? (
      <h1>Please choose pokemon correctly</h1>
      ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.img} />
          <h3>Types: {pokemon.types}</h3>
          <h3>Weight: {pokemon.weight}</h3>
          <h3>Height: {pokemon.height}</h3>
          <h4>Abilities: {pokemon.abilities}</h4>
          <h4>Moves: {pokemon.moves}</h4>
          <h4>Stats: {pokemon.stats}</h4>
        </>
      )}
    </div>
    </div>
  );
}

export default App;

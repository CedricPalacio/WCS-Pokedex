import PokemonCard from "./components/PokemonCard";
import Buttons from "./components/NavBar";
import PropTypes from "prop-types";
import { useState } from "react";


function App() {
  
  const [pokemonIndex, setPokemonIndex] = useState(0);



//appelle le composant pokemonCard qui se définit en parent pokemon, qui prend en données pokemonIndex de pokemonList
//appelle le composant Buttons avec en 
  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/> 
      
      <Buttons state= {setPokemonIndex} pokemonIndex={pokemonIndex} pokemonList={pokemonList} />
    </div>
  );
  }
export default App;



const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

pokemonList.propTypes = {
  pokemonList: PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
  })
 
}

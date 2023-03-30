import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";
import { useState } from "react";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickS = () => {
    setPokemonIndex(pokemonIndex +1 )
    }
  
  
  const handleClickP = () => {
    setPokemonIndex(pokemonIndex -1 )
  }


  return (
    <div>
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      <button onClick={handleClickP}>précédent</button>
      <button onClick={handleClickS}>suivant</button>
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

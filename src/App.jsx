import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";


function App() {
  return (
    <div>
      <PokemonCard pokemon = {pokemonList[0]}/>
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
    name: "mew",
  },
];

pokemonList.propTypes = {
  pokemonList: PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string,
  })
 
}

//composant PokemonCard qui prend en props(en donneés) pokemon (donc pokemonIndex de PokemonList) et qui affiche ses données

function PokemonCard ({pokemon}) {
 
  return (pokemon.imgSrc ? <figure> <img src={pokemon.imgSrc}></img><figcaption>{pokemon.name}</figcaption></figure> : <figure><p>???</p><figcaption>{pokemon.name}</figcaption></figure> )
}  

export default PokemonCard;






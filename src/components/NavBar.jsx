// on veut une fonction qui prend en données pokemonIndex de pokemonList, qui affiche des bouttons et qui au clic du boutton, change de pokemonlist en fonction de l'index

function Buttons ({state, pokemonIndex, pokemonList}) {


  //fonction qui permet d'implementer +1 l'index au click du boutton
  const handleClickS = () => {
    state(pokemonIndex +1)
    }
  
  //fonction qui permet de décrémenter -1 l'index au click du boutton
  const handleClickP = () => {
    state(pokemonIndex -1)
  }
  
    return (
    <div>
      {pokemonIndex > 0 ? <button onClick={handleClickP}>précédent</button> : null}
      {pokemonIndex < pokemonList.length-1 ? <button onClick={handleClickS}>suivant</button> : null }
    </div> )
}

export default Buttons;
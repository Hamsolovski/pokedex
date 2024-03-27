function NavBar({pokemonIndex, handleClickNext, handleClickPrevious, pokemonList}) {
    return <div>
    {pokemonIndex > 0 && <button onClick={handleClickPrevious}>Précédent</button>}
    {pokemonIndex < pokemonList.length -1 && <button onClick={handleClickNext}>Suivant</button>}
    </div>
}

export default NavBar;
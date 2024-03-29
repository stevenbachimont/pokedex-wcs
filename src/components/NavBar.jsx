import PropTypes from "prop-types";

function NavBar({ onPrevious, onNext, pokemonList, onPokemonClick }) {
    const selectClick = (index) => {
        onPokemonClick(index);
    };


    return (
        <div className="buttons">
            <button onClick={onPrevious} className="moins1">Précédent</button>
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => {
                    selectClick(index);
                    alert(pokemon.msg);
                }}>{pokemon.name}</button>
            ))}
            <button onClick={onNext} className="plus1">Suivant</button>
        </div>
    );
}

NavBar.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    pokemonList: PropTypes.array.isRequired,
    onPokemonClick: PropTypes.func.isRequired,
};

export default NavBar;

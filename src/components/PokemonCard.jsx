
const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

const PokemonCard = () => {
    let pokemon = pokemonList[1];
    return (
        <div className="pokemon-card">
            <figure>
                {pokemon.imgSrc ? (
                    <img src={pokemon.imgSrc} alt={pokemon.name} />
                ) : (
                    <p>???</p>
                )}
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        </div>
    );
};

export default PokemonCard;
import PokemonCard from './components/PokemonCard.jsx';

function App() {
    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "mew",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
        },
    ];

    return (
        <div className="App">
                <PokemonCard
                    imgSrc={pokemonList[0].imgSrc}
                    name={pokemonList[0].name}
                />
        </div>
    );
}
// « Beat It »
export default App;

import { useState } from 'react';
import PokemonCard from './components/PokemonCard.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
    const pokemonList = [
        {
            name: "1",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "2",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        },
        {
            name: "3",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        },
        {
            name: "4",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
    ];

    const [pokemonIndex, setPokemonIndex] = useState(0);
    const incrementCounter = () => {
        setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
    };
    const decrementCounter = () => {
        setPokemonIndex((prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length);
    };

    const selectClick = (index) => {
        setPokemonIndex(index);
    };

    return (
        <div className="App">
            <PokemonCard
                imgSrc={pokemonList[pokemonIndex].imgSrc}
                name={pokemonList[pokemonIndex].name}
            />
            <NavBar
                onPrevious={decrementCounter}
                onNext={incrementCounter}
                pokemonList={pokemonList}
                onPokemonClick={selectClick}
            />
        </div>
    );
}

export default App;

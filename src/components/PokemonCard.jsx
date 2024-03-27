function PokemonCard({ imgSrc, name }) {

    return (
        <div className="pokemon-card">
            <figure>
                    <img src={imgSrc} alt={name}/>
                <figcaption>{name}</figcaption>
            </figure>
        </div>
    );

}

export default PokemonCard;



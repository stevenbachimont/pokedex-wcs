import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }

export default PokemonCard;



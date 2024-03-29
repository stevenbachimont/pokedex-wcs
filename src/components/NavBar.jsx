import PropTypes from "prop-types";

function NavBar({ onPrevious, onNext }) {
    return (
        <div className="buttons">
            <button onClick={onPrevious} className="moins1">Précédent</button>
            <button onClick={onNext} className="plus1">Suivant</button>
        </div>
    );
}

NavBar.propTypes = {
    onPrevious: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
}

export default NavBar;

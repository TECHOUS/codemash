import PropTypes from 'prop-types';

const SolidStar = ({ unselectStar, stateKey }) => {
    return (
        <div>
            <span onClick={() => unselectStar(stateKey)}>
                <i className="fa-solid fa-star"></i>
            </span>
        </div>
    );
};

SolidStar.propTypes = {
    unselectStar: PropTypes.func,
    stateKey: PropTypes.string,
};

export default SolidStar;

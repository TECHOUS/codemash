import PropTypes from 'prop-types';

const EmptyStar = ({ selectStar, stateKey }) => {
    return (
        <div>
            <span onClick={() => selectStar(stateKey)}>
                <i className="fa-regular fa-star"></i>
            </span>
        </div>
    );
};

EmptyStar.propTypes = {
    selectStar: PropTypes.func,
    stateKey: PropTypes.string,
};

export default EmptyStar;

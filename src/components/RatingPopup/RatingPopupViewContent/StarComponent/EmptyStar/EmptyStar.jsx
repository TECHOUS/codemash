import PropTypes from 'prop-types';
import styles from './EmptyStar.module.css';

const EmptyStar = ({ selectStar, stateKey }) => {
    return (
        <div>
            <span onClick={() => selectStar(stateKey)}>
                <i className={`fa-regular fa-star ${styles.emptyStarIcon}`}></i>
            </span>
        </div>
    );
};

EmptyStar.propTypes = {
    selectStar: PropTypes.func,
    stateKey: PropTypes.string,
};

export default EmptyStar;

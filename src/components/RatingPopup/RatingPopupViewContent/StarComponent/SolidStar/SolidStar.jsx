import PropTypes from 'prop-types';
import styles from './SolidStar.module.css';

const SolidStar = ({ unselectStar, stateKey }) => {
    return (
        <div>
            <span
                onClick={() => unselectStar(stateKey)}
                className={styles.solidStarIconDiv}
            >
                <i className={`fa-solid fa-star ${styles.solidStarIcon}`}></i>
            </span>
        </div>
    );
};

SolidStar.propTypes = {
    unselectStar: PropTypes.func,
    stateKey: PropTypes.string,
};

export default SolidStar;

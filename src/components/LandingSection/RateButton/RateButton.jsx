import PropTypes from 'prop-types';
import styles from './RateButton.module.css';
import { SET_POP_UP_OPENED } from '../../hooks/useAppReducer.js';

const RateButton = ({ dispatch }) => {
    function handleClick() {
        dispatch({
            type: SET_POP_UP_OPENED,
        });
    }

    return (
        <button className={styles.rateButton} onClick={handleClick}>
            <i className="fa-solid fa-star"></i> Rate
        </button>
    );
};

RateButton.propTypes = {
    dispatch: PropTypes.func,
};

export default RateButton;

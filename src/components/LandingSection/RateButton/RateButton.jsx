import PropTypes from 'prop-types';
import styles from './RateButton.module.css';

const RateButton = ({ isPopupOpened, setIsPopupOpened }) => {
    function handleClick() {
        setIsPopupOpened(!isPopupOpened);
    }

    return (
        <button className={styles.rateButton} onClick={handleClick}>
            <i className="fa-solid fa-star"></i> Rate
        </button>
    );
};

RateButton.propTypes = {
    isPopupOpened: PropTypes.bool,
    setIsPopupOpened: PropTypes.func,
};

export default RateButton;

import PropTypes from 'prop-types';
import styles from './RateButton.module.css';

const RateButton = ({ setIsPopupOpened }) => {
    function handleClick() {
        setIsPopupOpened(true);
    }

    return (
        <button className={styles.rateButton} onClick={handleClick}>
            <i className="fa-solid fa-star"></i> Rate
        </button>
    );
};

RateButton.propTypes = {
    setIsPopupOpened: PropTypes.func,
};

export default RateButton;

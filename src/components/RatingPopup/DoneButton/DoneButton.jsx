import PropTypes from 'prop-types';
import styles from './DoneButton.module.css';

const DoneButton = ({ handleDoneButton }) => {
    console.log('done button rendered');
    return (
        <button className={styles.doneButton} onClick={handleDoneButton}>
            <i className="fa-solid fa-check"></i> Done
        </button>
    );
};

DoneButton.propTypes = {
    handleDoneButton: PropTypes.func,
};

export default DoneButton;

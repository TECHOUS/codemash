import styles from './ErrorMessage.module.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({ errorMessage, iconClasses }) => {
    return (
        <div className={styles.errorMessageDiv}>
            <div className={styles.iconDiv}>
                <i className={`${iconClasses} ${styles.icon}`}></i>
            </div>
            <h2 className={styles.errorMessage}>{errorMessage}</h2>
        </div>
    );
};

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
    iconClasses: PropTypes.string,
};

export default ErrorMessage;

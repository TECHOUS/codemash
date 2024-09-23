import PropTypes from 'prop-types';
import styles from './CrossIcon.module.css';

const CrossIcon = ({ hideToastMessage }) => {
    return (
        <span onClick={hideToastMessage} className={styles.crossIcon}>
            <i className="fa-solid fa-xmark"></i>
        </span>
    );
};

CrossIcon.propTypes = {
    hideToastMessage: PropTypes.func,
};

export default CrossIcon;

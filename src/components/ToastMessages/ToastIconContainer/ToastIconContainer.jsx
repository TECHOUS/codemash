import ToastIcon from './ToastIcon.jsx';
import styles from './ToastIconContainer.module.css';
import PropTypes from 'prop-types';

const ToastIconContainer = ({ type }) => {
    return (
        <div className={styles.toastIconContainer}>
            <ToastIcon type={type} />
        </div>
    );
};

ToastIconContainer.propTypes = {
    type: PropTypes.string,
};

export default ToastIconContainer;

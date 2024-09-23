import ToastMessages from './ToastMessages.jsx';
import PropTypes from 'prop-types';
import styles from './ToastMessagesContainer.module.css';

const ToastMessagesContainer = ({ toastMessages, appDispatch }) => {
    return (
        <div className={styles.toastMessagesContainer}>
            <ToastMessages
                toastMessages={toastMessages}
                appDispatch={appDispatch}
            />
        </div>
    );
};

ToastMessagesContainer.propTypes = {
    toastMessages: PropTypes.array,
    appDispatch: PropTypes.func,
};

export default ToastMessagesContainer;

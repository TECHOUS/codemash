/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import CrossIcon from '../CrossIcon/CrossIcon';
import { useEffect, memo } from 'react';

const ToastMessage = ({ toastMessage, removeToastMessage }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            removeToastMessage(toastMessage.timestamp);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [toastMessage, removeToastMessage]);

    const hideToastMessage = () => {
        removeToastMessage(toastMessage.timestamp);
    };

    return (
        <div>
            <CrossIcon hideToastMessage={hideToastMessage} />
            <div>{toastMessage.message}</div>
        </div>
    );
};

ToastMessage.propTypes = {
    toastMessage: PropTypes.object,
    removeToastMessage: PropTypes.func,
};

export default memo(ToastMessage);

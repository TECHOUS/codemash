/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import ToastMessage from './ToastMessage/ToastMessage';
import { memo } from 'react';

const ToastMessages = ({ toastMessages, removeToastMessage }) => {
    if (toastMessages && toastMessages.length > 0) {
        return toastMessages.map((toastMessage) => (
            <ToastMessage
                key={toastMessage.timestamp}
                toastMessage={toastMessage}
                removeToastMessage={removeToastMessage}
            />
        ));
    } else {
        return <></>;
    }
};

ToastMessages.propTypes = {
    toastMessages: PropTypes.array,
    removeToastMessage: PropTypes.func,
};

export default memo(ToastMessages);

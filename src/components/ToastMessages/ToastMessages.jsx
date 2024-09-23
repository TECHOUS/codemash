/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import ToastMessage from './ToastMessage/ToastMessage';
import { memo } from 'react';

const ToastMessages = ({ toastMessages, appDispatch }) => {
    if (toastMessages && toastMessages.length > 0) {
        return toastMessages.map((toastMessage) => (
            <ToastMessage
                key={toastMessage.timestamp}
                toastMessage={toastMessage}
                appDispatch={appDispatch}
            />
        ));
    } else {
        return <></>;
    }
};

ToastMessages.propTypes = {
    toastMessages: PropTypes.array,
    appDispatch: PropTypes.func,
};

export default memo(ToastMessages);

/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import ToastMessage from './ToastMessage/ToastMessage';
import { memo } from 'react';

const ToastMessages = ({ toastMessages, dispatch }) => {
    if (toastMessages && toastMessages.length > 0) {
        return toastMessages.map((toastMessage) => (
            <ToastMessage
                key={toastMessage.timestamp}
                toastMessage={toastMessage}
                dispatch={dispatch}
            />
        ));
    } else {
        return <></>;
    }
};

ToastMessages.propTypes = {
    toastMessages: PropTypes.array,
    dispatch: PropTypes.func,
};

export default memo(ToastMessages);

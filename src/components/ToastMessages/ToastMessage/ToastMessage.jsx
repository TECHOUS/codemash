/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import CrossIcon from '../CrossIcon/CrossIcon';
import { useEffect, memo } from 'react';
import { REMOVE_TOAST_MESSAGE } from '../../hooks/useAppReducer.js';

const ToastMessage = ({ toastMessage, appDispatch }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            appDispatch({
                type: REMOVE_TOAST_MESSAGE,
                payload: {
                    timestampToRemove: toastMessage.timestamp,
                },
            });
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [toastMessage, appDispatch]);

    const hideToastMessage = () => {
        appDispatch({
            type: REMOVE_TOAST_MESSAGE,
            payload: {
                timestampToRemove: toastMessage.timestamp,
            },
        });
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
    appDispatch: PropTypes.func,
};

export default memo(ToastMessage);

/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import CrossIcon from '../CrossIcon/CrossIcon';
import { useEffect, memo, useMemo } from 'react';
import { REMOVE_TOAST_MESSAGE } from '../../hooks/useAppReducer.js';
import styles from './ToastMessage.module.css';

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

    const computeClassName = useMemo(() => {
        switch (toastMessage.type) {
            case 'SUCCESS':
                return styles.successMessageDiv;
            case 'ERROR':
                return styles.errorMessageDiv;
            default:
                return '';
        }
    }, [toastMessage.type]);

    return (
        <div className={computeClassName}>
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

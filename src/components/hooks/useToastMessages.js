import { useState, useCallback } from 'react';

export function useToastMessages() {
    const [toastMessages, setToastMessages] = useState([]);

    const addToastMessage = useCallback(
        (message, timestamp) => {
            const newMessages = [...toastMessages];
            newMessages.push({
                message,
                timestamp,
            });
            setToastMessages(newMessages);
        },
        [toastMessages]
    );

    const removeToastMessage = useCallback(
        (timestampToRemove) => {
            const newMessages = toastMessages.filter(
                (current) => current.timestamp != timestampToRemove
            );
            setToastMessages(newMessages);
        },
        [toastMessages, setToastMessages]
    );

    return { toastMessages, addToastMessage, removeToastMessage };
}

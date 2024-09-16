import Header from '../Header';
import LandingSection from '../LandingSection';
import './App.css';
import { useState, useCallback } from 'react';
import RatingPopupContainer from '../RatingPopup';
import ToastMessages from '../ToastMessages/ToastMessages';

function App() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [toastMessages, setToastMessages] = useState([]);

    const addToastMessage = useCallback(
        (message) => {
            const newMessages = [...toastMessages];
            newMessages.push({
                message,
                timestamp: new Date(),
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

    return (
        <>
            <Header />
            <LandingSection setIsPopupOpened={setIsPopupOpened} />
            {isPopupOpened && (
                <RatingPopupContainer
                    setIsPopupOpened={setIsPopupOpened}
                    setAccessToken={setAccessToken}
                    addToastMessage={addToastMessage}
                />
            )}
            <ToastMessages
                toastMessages={toastMessages}
                removeToastMessage={removeToastMessage}
            />
        </>
    );
}

export default App;

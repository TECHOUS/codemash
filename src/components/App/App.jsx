import Header from '../Header';
import LandingSection from '../LandingSection';
import './App.css';
import { useState } from 'react';
import RatingPopupHandler from '../RatingPopup';
import ToastMessages from '../ToastMessages/ToastMessages';
import { useToastMessages } from '../hooks/useToastMessages.js';

function App() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const { toastMessages, addToastMessage, removeToastMessage } =
        useToastMessages();

    return (
        <>
            <Header />
            <LandingSection setIsPopupOpened={setIsPopupOpened} />
            <RatingPopupHandler
                isPopupOpened={isPopupOpened}
                setIsPopupOpened={setIsPopupOpened}
                setAccessToken={setAccessToken}
                addToastMessage={addToastMessage}
            />
            <ToastMessages
                toastMessages={toastMessages}
                removeToastMessage={removeToastMessage}
            />
        </>
    );
}

export default App;

import Header from '../Header';
import LandingSection from '../LandingSection';
import './App.css';
import RatingPopupHandler from '../RatingPopup';
import ToastMessagesContainer from '../ToastMessages';
import { useAppReducer } from '../hooks/useAppReducer.js';

function App() {
    const [state, appDispatch] = useAppReducer();

    return (
        <>
            <Header />
            <LandingSection appDispatch={appDispatch} />
            <RatingPopupHandler
                isPopupOpened={state.isPopupOpened}
                appDispatch={appDispatch}
            />
            <ToastMessagesContainer
                toastMessages={state.toastMessages}
                appDispatch={appDispatch}
            />
        </>
    );
}

export default App;

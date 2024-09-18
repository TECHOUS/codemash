import Header from '../Header';
import LandingSection from '../LandingSection';
import './App.css';
import RatingPopupHandler from '../RatingPopup';
import ToastMessages from '../ToastMessages/ToastMessages';
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
            <ToastMessages
                toastMessages={state.toastMessages}
                appDispatch={appDispatch}
            />
        </>
    );
}

export default App;

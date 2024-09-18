import Header from '../Header';
import LandingSection from '../LandingSection';
import './App.css';
import RatingPopupHandler from '../RatingPopup';
import ToastMessages from '../ToastMessages/ToastMessages';
import { useAppReducer } from '../hooks/useAppReducer.js';

function App() {
    // const [isPopupOpened, setIsPopupOpened] = useState(false);
    // const [accessToken, setAccessToken] = useState('');
    // const { toastMessages, addToastMessage, removeToastMessage } =
    //     useToastMessages();
    const [state, dispatch] = useAppReducer();

    return (
        <>
            <Header />
            <LandingSection dispatch={dispatch} />
            <RatingPopupHandler
                isPopupOpened={state.isPopupOpened}
                dispatch={dispatch}
            />
            <ToastMessages
                toastMessages={state.toastMessages}
                dispatch={dispatch}
            />
        </>
    );
}

export default App;

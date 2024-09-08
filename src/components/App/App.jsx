import Header from '../Header';
import LandingSection from '../LandingSection';
import './App.css';
import { useState } from 'react';
import RatingPopup from '../RatingPopup';

function App() {
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    return (
        <>
            <Header />
            <LandingSection
                isPopupOpened={isPopupOpened}
                setIsPopupOpened={setIsPopupOpened}
            />
            {isPopupOpened ? <RatingPopup /> : <></>}
        </>
    );
}

export default App;

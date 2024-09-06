import LandingSectionTop from './top/LandingSectionTop.jsx';
import LandingSectionMid from './mid/LandingSectionMid.jsx';
import LandingSectionBottom from './bottom/LandingSectionBottom.jsx';
import './LandingSection.css';
import { useState } from 'react';
import RatingPopup from './RatingPopup/RatingPopup.jsx';
import DotSpinner from '../DotSpinner/DotSpinner.jsx';

const LandingSection = () => {
    const [isPopupOpened, setIsPopupOpened] = useState(false);

    return (
        <div id="landing-section">
            <div id="landing-section-content">
                <LandingSectionTop />
                <LandingSectionMid
                    isPopupOpened={isPopupOpened}
                    setIsPopupOpened={setIsPopupOpened}
                />
                <LandingSectionBottom />
                <DotSpinner dotCount={5} />
                {isPopupOpened ? <RatingPopup /> : <></>}
            </div>
        </div>
    );
};

export default LandingSection;

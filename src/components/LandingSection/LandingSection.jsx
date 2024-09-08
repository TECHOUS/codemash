import LandingSectionTop from './top/LandingSectionTop.jsx';
import LandingSectionMid from './mid/LandingSectionMid.jsx';
import LandingSectionBottom from './bottom/LandingSectionBottom.jsx';
import './LandingSection.css';
import PropTypes from 'prop-types';

const LandingSection = ({ isPopupOpened, setIsPopupOpened }) => {
    return (
        <div id="landing-section">
            <div id="landing-section-content">
                <LandingSectionTop />
                <LandingSectionMid
                    isPopupOpened={isPopupOpened}
                    setIsPopupOpened={setIsPopupOpened}
                />
                <LandingSectionBottom />
            </div>
        </div>
    );
};

LandingSection.propTypes = {
    isPopupOpened: PropTypes.bool,
    setIsPopupOpened: PropTypes.func,
};

export default LandingSection;

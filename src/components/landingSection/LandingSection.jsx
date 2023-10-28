import LandingSectionTop from './top/LandingSectionTop.jsx';
import LandingSectionMid from './mid/LandingSectionMid.jsx';
import LandingSectionBottom from './bottom/LandingSectionBottom.jsx';
import './LandingSection.css';

const LandingSection = () => {
    return (
        <div id="landing-section">
            <div id="landing-section-content">
                <LandingSectionTop />
                <LandingSectionMid />
                <LandingSectionBottom />
            </div>
        </div>
    );
};

export default LandingSection;

import LandingSectionTop from './top/LandingSectionTop.jsx';
import LandingSectionMid from './mid/LandingSectionMid.jsx';
import LandingSectionBottom from './bottom/LandingSectionBottom.jsx';
import './LandingSection.css';
import PropTypes from 'prop-types';

const LandingSection = ({ appDispatch }) => {
    return (
        <div id="landing-section">
            <div id="landing-section-content">
                <LandingSectionTop />
                <LandingSectionMid appDispatch={appDispatch} />
                <LandingSectionBottom />
            </div>
        </div>
    );
};

LandingSection.propTypes = {
    appDispatch: PropTypes.func,
};

export default LandingSection;

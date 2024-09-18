import LandingSectionTop from './top/LandingSectionTop.jsx';
import LandingSectionMid from './mid/LandingSectionMid.jsx';
import LandingSectionBottom from './bottom/LandingSectionBottom.jsx';
import './LandingSection.css';
import PropTypes from 'prop-types';

const LandingSection = ({ dispatch }) => {
    return (
        <div id="landing-section">
            <div id="landing-section-content">
                <LandingSectionTop />
                <LandingSectionMid dispatch={dispatch} />
                <LandingSectionBottom />
            </div>
        </div>
    );
};

LandingSection.propTypes = {
    dispatch: PropTypes.func,
};

export default LandingSection;

import PropTypes from 'prop-types';
import './LandingSectionMid.css';
import RateButton from '../RateButton';

const LandingSectionMid = ({ setIsPopupOpened }) => {
    return (
        <div id="landing-section-mid">
            <RateButton setIsPopupOpened={setIsPopupOpened} />
        </div>
    );
};

LandingSectionMid.propTypes = {
    setIsPopupOpened: PropTypes.func,
};

export default LandingSectionMid;

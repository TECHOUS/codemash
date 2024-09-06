import PropTypes from 'prop-types';
import './LandingSectionMid.css';
import RateButton from '../RateButton';

const LandingSectionMid = ({ isPopupOpened, setIsPopupOpened }) => {
    return (
        <div id="landing-section-mid">
            <RateButton
                isPopupOpened={isPopupOpened}
                setIsPopupOpened={setIsPopupOpened}
            />
        </div>
    );
};

LandingSectionMid.propTypes = {
    isPopupOpened: PropTypes.bool,
    setIsPopupOpened: PropTypes.func,
};

export default LandingSectionMid;

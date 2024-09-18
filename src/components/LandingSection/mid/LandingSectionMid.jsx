import PropTypes from 'prop-types';
import './LandingSectionMid.css';
import RateButton from '../RateButton';

const LandingSectionMid = ({ appDispatch }) => {
    return (
        <div id="landing-section-mid">
            <RateButton appDispatch={appDispatch} />
        </div>
    );
};

LandingSectionMid.propTypes = {
    appDispatch: PropTypes.func,
};

export default LandingSectionMid;

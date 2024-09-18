import PropTypes from 'prop-types';
import './LandingSectionMid.css';
import RateButton from '../RateButton';

const LandingSectionMid = ({ dispatch }) => {
    return (
        <div id="landing-section-mid">
            <RateButton dispatch={dispatch} />
        </div>
    );
};

LandingSectionMid.propTypes = {
    dispatch: PropTypes.func,
};

export default LandingSectionMid;

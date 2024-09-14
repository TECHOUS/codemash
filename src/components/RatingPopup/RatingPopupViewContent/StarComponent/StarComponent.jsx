import PropTypes from 'prop-types';
import SolidStar from './SolidStar/SolidStar.jsx';
import EmptyStar from './EmptyStar/EmptyStar.jsx';

const StarComponent = ({
    stateKey,
    otherStateKey,
    ratingStarObj,
    setRatingStarObj,
}) => {
    console.log('StarComponent rendered');

    function unselectStar(stateKey) {
        setRatingStarObj((oldState) => {
            const newState = { ...oldState };
            newState[stateKey] = false;
            return newState;
        });
    }

    function selectStar(stateKey) {
        setRatingStarObj((oldState) => {
            const newState = { ...oldState };
            newState[stateKey] = true;
            newState[otherStateKey] = false;
            return newState;
        });
    }

    if (ratingStarObj[stateKey]) {
        return <SolidStar unselectStar={unselectStar} stateKey={stateKey} />;
    } else {
        return <EmptyStar selectStar={selectStar} stateKey={stateKey} />;
    }
};

StarComponent.propTypes = {
    stateKey: PropTypes.string,
    otherStateKey: PropTypes.string,
    ratingStarObj: PropTypes.object,
    setRatingStarObj: PropTypes.func,
};

export default StarComponent;

import PropTypes from 'prop-types';
import SolidStar from './SolidStar';
import EmptyStar from './EmptyStar';
import { useCallback } from 'react';
import {
    UNSELECT_STAR,
    SELECT_STAR,
} from '../../../hooks/useRatingPopupReducer.js';

const StarComponent = ({
    stateKey,
    otherStateKey,
    ratingStarObj,
    ratingPopupDispatch,
}) => {
    console.log('StarComponent rendered');

    const unselectStar = useCallback(() => {
        ratingPopupDispatch({
            type: UNSELECT_STAR,
            payload: {
                stateKey,
                otherStateKey,
            },
        });
    }, [ratingPopupDispatch, stateKey, otherStateKey]);

    const selectStar = useCallback(() => {
        ratingPopupDispatch({
            type: SELECT_STAR,
            payload: {
                stateKey,
                otherStateKey,
            },
        });
    }, [ratingPopupDispatch, stateKey, otherStateKey]);

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
    ratingPopupDispatch: PropTypes.func,
};

export default StarComponent;

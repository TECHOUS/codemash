/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import RatingPopupContainer from './RatingPopupContainer.jsx';
import { memo } from 'react';

const RatingPopupHandler = ({ isPopupOpened, dispatch }) => {
    if (isPopupOpened) {
        return <RatingPopupContainer dispatch={dispatch} />;
    } else {
        return <></>;
    }
};

RatingPopupHandler.propTypes = {
    isPopupOpened: PropTypes.bool,
    dispatch: PropTypes.func,
};

export default memo(RatingPopupHandler);

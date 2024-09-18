/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import RatingPopupContainer from './RatingPopupContainer.jsx';
import { memo } from 'react';

const RatingPopupHandler = ({ isPopupOpened, appDispatch }) => {
    if (isPopupOpened) {
        return <RatingPopupContainer appDispatch={appDispatch} />;
    } else {
        return <></>;
    }
};

RatingPopupHandler.propTypes = {
    isPopupOpened: PropTypes.bool,
    appDispatch: PropTypes.func,
};

export default memo(RatingPopupHandler);

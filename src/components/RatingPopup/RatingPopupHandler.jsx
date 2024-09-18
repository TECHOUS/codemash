/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import RatingPopupContainer from './RatingPopupContainer.jsx';
import { memo } from 'react';

const RatingPopupHandler = ({
    isPopupOpened,
    setIsPopupOpened,
    setAccessToken,
    addToastMessage,
}) => {
    if (isPopupOpened) {
        return (
            <RatingPopupContainer
                setIsPopupOpened={setIsPopupOpened}
                setAccessToken={setAccessToken}
                addToastMessage={addToastMessage}
            />
        );
    } else {
        return <></>;
    }
};

RatingPopupHandler.propTypes = {
    isPopupOpened: PropTypes.bool,
    setIsPopupOpened: PropTypes.func,
    setAccessToken: PropTypes.func,
    addToastMessage: PropTypes.func,
};

export default memo(RatingPopupHandler);

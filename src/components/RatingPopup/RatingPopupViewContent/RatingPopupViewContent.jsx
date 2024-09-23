/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import RPMobileContentViewer from './RPMobileContentViewer';
import RPDesktopContentViewer from './RPDesktopContentViewer';
import DotSpinnerContainer from '../../DotSpinner';
import ErrorMessage from '../../ErrorMessage';
import { memo } from 'react';

const RatingPopupViewContent = ({
    innerWidth,
    isLoadingForRandomCodes,
    randomCodesResponse,
    ratingStarObj,
    ratingPopupDispatch,
}) => {
    console.log('RatingPopupViewContent rendered');
    if (isLoadingForRandomCodes) {
        return <DotSpinnerContainer dotCount={5} />;
    } else if (
        randomCodesResponse.status &&
        randomCodesResponse.status != 200
    ) {
        return (
            <ErrorMessage
                errorMessage="Unable to load! Please try again!!"
                iconClasses="fa-solid fa-circle-exclamation"
            />
        );
    } else if (innerWidth <= 768) {
        return (
            <RPMobileContentViewer
                randomCodesResponse={randomCodesResponse}
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
        );
    } else {
        return (
            <RPDesktopContentViewer
                randomCodesResponse={randomCodesResponse}
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
        );
    }
};

RatingPopupViewContent.propTypes = {
    innerWidth: PropTypes.number,
    isLoadingForRandomCodes: PropTypes.bool,
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    ratingPopupDispatch: PropTypes.func,
};

export default memo(RatingPopupViewContent);

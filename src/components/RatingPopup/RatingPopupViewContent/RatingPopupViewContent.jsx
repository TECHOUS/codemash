import PropTypes from 'prop-types';
import RPMobileContentViewer from './RPMobileContentViewer';
import RPDesktopContentViewer from './RPDesktopContentViewer';
import DotSpinner from '../../DotSpinner';
import ErrorMessage from '../../ErrorMessage';

const RatingPopupViewContent = ({
    innerWidth,
    isLoading,
    randomCodesResponse,
    ratingStarObj,
    setRatingStarObj,
}) => {
    console.log('RatingPopupViewContent rendered');
    if (isLoading) {
        return (
            <div>
                <DotSpinner dotCount={5} />;
            </div>
        );
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
                setRatingStarObj={setRatingStarObj}
            />
        );
    } else {
        return <RPDesktopContentViewer />;
    }
};

RatingPopupViewContent.propTypes = {
    innerWidth: PropTypes.number,
    isLoading: PropTypes.bool,
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    setRatingStarObj: PropTypes.func,
};

export default RatingPopupViewContent;

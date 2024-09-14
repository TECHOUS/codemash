import PropTypes from 'prop-types';
import RPMCodeObject from './RPMCodeObject';

const RPMobileContentViewer = ({
    randomCodesResponse,
    ratingStarObj,
    setRatingStarObj,
}) => {
    console.log('RPMobileContentViewer rendered');

    return (
        <>
            <RPMCodeObject
                codeObject={randomCodesResponse.codeObject1}
                stateKey="firstStar"
                otherStateKey="secondStar"
                ratingStarObj={ratingStarObj}
                setRatingStarObj={setRatingStarObj}
            />
            <RPMCodeObject
                codeObject={randomCodesResponse.codeObject2}
                stateKey="secondStar"
                otherStateKey="firstStar"
                ratingStarObj={ratingStarObj}
                setRatingStarObj={setRatingStarObj}
            />
        </>
    );
};

RPMobileContentViewer.propTypes = {
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    setRatingStarObj: PropTypes.func,
};

export default RPMobileContentViewer;

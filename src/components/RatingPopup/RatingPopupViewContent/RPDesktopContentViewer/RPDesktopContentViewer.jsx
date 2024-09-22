import PropTypes from 'prop-types';
import RPDCodeObject from './RPDCodeObject/RPDCodeObject';

const RPDesktopContentViewer = ({
    randomCodesResponse,
    ratingStarObj,
    ratingPopupDispatch,
}) => {
    return (
        <>
            <RPDCodeObject
                codeObject={randomCodesResponse.codeObject1}
                stateKey="firstStar"
                otherStateKey="secondStar"
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
            <RPDCodeObject
                codeObject={randomCodesResponse.codeObject2}
                stateKey="secondStar"
                otherStateKey="firstStar"
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
        </>
    );
};

RPDesktopContentViewer.propTypes = {
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    ratingPopupDispatch: PropTypes.func,
};

export default RPDesktopContentViewer;

import PropTypes from 'prop-types';
import RPMCodeObject from './RPMCodeObject';

const RPMobileContentViewer = ({
    randomCodesResponse,
    ratingStarObj,
    ratingPopupDispatch,
}) => {
    console.log('RPMobileContentViewer rendered');

    return (
        <>
            <RPMCodeObject
                codeObject={randomCodesResponse.codeObject1}
                stateKey="firstStar"
                otherStateKey="secondStar"
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
            <RPMCodeObject
                codeObject={randomCodesResponse.codeObject2}
                stateKey="secondStar"
                otherStateKey="firstStar"
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
        </>
    );
};

RPMobileContentViewer.propTypes = {
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    ratingPopupDispatch: PropTypes.func,
};

export default RPMobileContentViewer;

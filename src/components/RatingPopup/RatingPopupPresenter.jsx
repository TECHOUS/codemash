/* eslint-disable react-refresh/only-export-components */
import styles from './RatingPopupPresenter.module.css';
import RatingPopupViewContent from './RatingPopupViewContent';
import DoneButtonContainer from './DoneButton';
import PropTypes from 'prop-types';
import { memo } from 'react';

const RatingPopupPresenter = ({
    innerWidth,
    isLoadingForRandomCodes,
    randomCodesResponse,
    ratingStarObj,
    ratingPopupDispatch,
    handleDoneButton,
}) => {
    console.log('RatingPopupPresenter rendered');

    return (
        <div className={styles.ratingPopup}>
            <h2 className={styles.ratingPopupH2}>
                Rate the code file which you see is having the better code style
            </h2>
            <RatingPopupViewContent
                innerWidth={innerWidth}
                isLoadingForRandomCodes={isLoadingForRandomCodes}
                randomCodesResponse={randomCodesResponse}
                ratingStarObj={ratingStarObj}
                ratingPopupDispatch={ratingPopupDispatch}
            />
            <DoneButtonContainer handleDoneButton={handleDoneButton} />
        </div>
    );
};

RatingPopupPresenter.propTypes = {
    innerWidth: PropTypes.number,
    isLoadingForRandomCodes: PropTypes.bool,
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    ratingPopupDispatch: PropTypes.func,
    handleDoneButton: PropTypes.func,
};

export default memo(RatingPopupPresenter);

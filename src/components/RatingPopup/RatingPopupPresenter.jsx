/* eslint-disable react-refresh/only-export-components */
import styles from './RatingPopupPresenter.module.css';
import RatingPopupViewContent from './RatingPopupViewContent';
import DoneButton from './DoneButton/DoneButton';
import PropTypes from 'prop-types';
import { memo } from 'react';

const RatingPopupPresenter = ({
    innerWidth,
    isLoadingForRandomCodes,
    randomCodesResponse,
    ratingStarObj,
    setRatingStarObj,
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
                setRatingStarObj={setRatingStarObj}
            />
            <div className={styles.doneButtonDiv}>
                <DoneButton handleDoneButton={handleDoneButton} />
            </div>
        </div>
    );
};

RatingPopupPresenter.propTypes = {
    innerWidth: PropTypes.number,
    isLoadingForRandomCodes: PropTypes.bool,
    randomCodesResponse: PropTypes.object,
    ratingStarObj: PropTypes.object,
    setRatingStarObj: PropTypes.func,
    handleDoneButton: PropTypes.func,
};

export default memo(RatingPopupPresenter);

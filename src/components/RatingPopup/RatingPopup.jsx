import styles from './RatingPopup.module.css';
import { useState, useEffect, useCallback } from 'react';
import RatingPopupViewContent from './RatingPopupViewContent';
import DoneButton from './DoneButton/DoneButton';
import PropTypes from 'prop-types';

const RatingPopup = ({ setIsPopupOpened }) => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [randomCodesResponse, setRandomCodesResponse] = useState({});
    const [ratingStarObj, setRatingStarObj] = useState({
        firstStar: false,
        secondStar: false,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [rateCodeResponse, setRateCodeResponse] = useState({
        status: 0,
        message: '',
    });

    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth);
    }, []);

    async function callRateCodeAPI(payload) {
        try {
            const putResponse = await fetch(import.meta.env.VITE_RATE_CODE, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const parsedResponse = await putResponse.json();
            if (parsedResponse.status && parsedResponse.message) {
                setRateCodeResponse({
                    status: parsedResponse.status,
                    message: parsedResponse.message,
                });
            } else {
                throw new Error('Issue with rateCode API');
            }
        } catch (e) {
            console.error(e);
            setRateCodeResponse({
                status: 500,
                message: 'Unable to update the Code Ratings',
            });
        }
    }

    const handleDoneButton = async () => {
        if (!ratingStarObj.firstStar && !ratingStarObj.secondStar) {
            setRateCodeResponse({
                status: -1,
                message: 'Please select and rate any code to proceed',
            });
            return;
        }

        const payload = {
            codeRatingEngineToken: randomCodesResponse.accessToken,
            codeId1: randomCodesResponse['codeObject1']['codeId'],
            codeId2: randomCodesResponse['codeObject2']['codeId'],
        };
        if (ratingStarObj.firstStar) {
            payload['winner'] = 1;
        } else if (ratingStarObj.secondStar) {
            payload['winner'] = 2;
        }
        await callRateCodeAPI(payload);
        setIsPopupOpened(false);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setInnerWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        async function callRandomCodesAPI() {
            try {
                const response = await fetch(import.meta.env.VITE_RANDOM_CODES);
                const parsedResponse = await response.json();
                setRandomCodesResponse(parsedResponse);
            } catch (e) {
                setRandomCodesResponse({
                    status: 500,
                    error: e,
                });
            }
            setIsLoading(false);
        }

        callRandomCodesAPI();
    }, []);

    return (
        <div className={styles.ratingPopup}>
            <h2 className={styles.ratingPopupH2}>
                Rate the code file which you see is having the better code style
            </h2>
            <RatingPopupViewContent
                innerWidth={innerWidth}
                isLoading={isLoading}
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

RatingPopup.propTypes = {
    setIsPopupOpened: PropTypes.func,
};

export default RatingPopup;

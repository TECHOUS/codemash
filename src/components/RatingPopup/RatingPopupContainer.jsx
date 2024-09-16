import RatingPopupPresenter from './RatingPopupPresenter.jsx';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useWindowWidth } from '../hooks/useWindowWidth.js';

const RatingPopupContainer = ({
    setIsPopupOpened,
    setAccessToken,
    addToastMessage,
}) => {
    const { innerWidth } = useWindowWidth();
    const [randomCodesResponse, setRandomCodesResponse] = useState({});
    const [isLoadingForRandomCodes, setIsLoadingForRandomCodes] =
        useState(true);
    const [ratingStarObj, setRatingStarObj] = useState({
        firstStar: false,
        secondStar: false,
    });

    console.log('ratingpopup container rendered');

    const callRateCodeAPI = useCallback(async (payload) => {
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
                return {
                    status: parsedResponse.status,
                    message: parsedResponse.message,
                };
            } else {
                throw new Error('Issue with rateCode API');
            }
        } catch (e) {
            console.error(e);
            return {
                status: 500,
                message: 'Unable to update the Code Ratings',
            };
        }
    }, []);

    const handleDoneButton = useCallback(async () => {
        if (!ratingStarObj.firstStar && !ratingStarObj.secondStar) {
            addToastMessage('Please select and rate any code to proceed');
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
        const putResponse = await callRateCodeAPI(payload);
        addToastMessage(putResponse.message);
        setIsPopupOpened(false);
    }, [
        randomCodesResponse,
        ratingStarObj,
        setIsPopupOpened,
        addToastMessage,
        callRateCodeAPI,
    ]);

    useEffect(() => {
        async function callRandomCodesAPI() {
            try {
                const response = await fetch(import.meta.env.VITE_RANDOM_CODES);
                const parsedResponse = await response.json();
                setRandomCodesResponse(parsedResponse);
                setAccessToken(parsedResponse['accessToken']);
            } catch (e) {
                setRandomCodesResponse({
                    status: 500,
                    error: e,
                });
            }
            setIsLoadingForRandomCodes(false);
        }

        callRandomCodesAPI();
    }, [setAccessToken]);

    return (
        <RatingPopupPresenter
            innerWidth={innerWidth}
            isLoadingForRandomCodes={isLoadingForRandomCodes}
            randomCodesResponse={randomCodesResponse}
            ratingStarObj={ratingStarObj}
            setRatingStarObj={setRatingStarObj}
            handleDoneButton={handleDoneButton}
        />
    );
};

RatingPopupContainer.propTypes = {
    setIsPopupOpened: PropTypes.func,
    setAccessToken: PropTypes.func,
    addToastMessage: PropTypes.func,
};

export default RatingPopupContainer;

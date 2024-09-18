/* eslint-disable react-refresh/only-export-components */
import RatingPopupPresenter from './RatingPopupPresenter.jsx';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useWindowWidth } from '../hooks/useWindowWidth.js';
import { useRandomCodesAPI } from '../hooks/useRandomCodesAPI.js';
import { memo } from 'react';
import {
    ADD_TOAST_MESSAGE,
    SET_POP_UP_CLOSED,
    SET_ACCESS_TOKEN,
} from '../hooks/useAppReducer.js';

const RatingPopupContainer = ({ dispatch }) => {
    const { innerWidth } = useWindowWidth();
    const { randomCodesResponse, isLoadingForRandomCodes, callRandomCodesAPI } =
        useRandomCodesAPI();
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
            dispatch({
                type: ADD_TOAST_MESSAGE,
                payload: {
                    message: 'Please select and rate any code to proceed',
                    timestamp: Date.now(),
                },
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
        const putResponse = await callRateCodeAPI(payload);
        dispatch({
            type: ADD_TOAST_MESSAGE,
            payload: {
                message: putResponse.message,
                timestamp: Date.now(),
            },
        });
        dispatch({
            type: SET_POP_UP_CLOSED,
        });
    }, [randomCodesResponse, ratingStarObj, callRateCodeAPI, dispatch]);

    useEffect(() => {
        const response = callRandomCodesAPI();
        if (response && response.status == 200) {
            dispatch({
                type: SET_ACCESS_TOKEN,
                payload: {
                    accessToken: response['accessToken'],
                },
            });
        }
    }, [dispatch, callRandomCodesAPI]);

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
    dispatch: PropTypes.func,
};

export default memo(RatingPopupContainer);

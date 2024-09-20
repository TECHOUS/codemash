/* eslint-disable react-refresh/only-export-components */
import RatingPopupPresenter from './RatingPopupPresenter.jsx';
import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useWindowWidth } from '../hooks/useWindowWidth.js';
import { useRandomCodesAPI } from '../hooks/useRandomCodesAPI.js';
import { memo } from 'react';
import {
    ADD_TOAST_MESSAGE,
    SET_POP_UP_CLOSED,
    SET_ACCESS_TOKEN,
} from '../hooks/useAppReducer.js';
import { useRatingPopupReducer } from '../hooks/useRatingPopupReducer.js';

const RatingPopupContainer = ({ appDispatch }) => {
    const [state, ratingPopupDispatch] = useRatingPopupReducer();
    useWindowWidth(state.innerWidth, ratingPopupDispatch);
    const { callRandomCodesAPI } = useRandomCodesAPI(ratingPopupDispatch);

    console.log('ratingpopup container rendered');

    useEffect(() => {
        const response = callRandomCodesAPI();
        if (response && response.status == 200) {
            appDispatch({
                type: SET_ACCESS_TOKEN,
                payload: {
                    accessToken: response['accessToken'],
                },
            });
        }
    }, [appDispatch, callRandomCodesAPI]);

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
        if (!state.ratingStarObj.firstStar && !state.ratingStarObj.secondStar) {
            appDispatch({
                type: ADD_TOAST_MESSAGE,
                payload: {
                    message: 'Please select and rate any code to proceed',
                    timestamp: Date.now(),
                    type: 'ERROR',
                },
            });
            return;
        }

        const payload = {
            codeRatingEngineToken: state.randomCodesResponse.accessToken,
            codeId1: state.randomCodesResponse['codeObject1']['codeId'],
            codeId2: state.randomCodesResponse['codeObject2']['codeId'],
        };
        if (state.ratingStarObj.firstStar) {
            payload['winner'] = 1;
        } else if (state.ratingStarObj.secondStar) {
            payload['winner'] = 2;
        }
        const putResponse = await callRateCodeAPI(payload);
        appDispatch({
            type: ADD_TOAST_MESSAGE,
            payload: {
                message: putResponse.message,
                timestamp: Date.now(),
                type: 'SUCCESS',
            },
        });
        appDispatch({
            type: SET_POP_UP_CLOSED,
        });
    }, [
        state.randomCodesResponse,
        state.ratingStarObj,
        callRateCodeAPI,
        appDispatch,
    ]);

    return (
        <RatingPopupPresenter
            innerWidth={state.innerWidth}
            isLoadingForRandomCodes={state.isLoadingForRandomCodes}
            randomCodesResponse={state.randomCodesResponse}
            ratingStarObj={state.ratingStarObj}
            ratingPopupDispatch={ratingPopupDispatch}
            handleDoneButton={handleDoneButton}
        />
    );
};

RatingPopupContainer.propTypes = {
    appDispatch: PropTypes.func,
};

export default memo(RatingPopupContainer);

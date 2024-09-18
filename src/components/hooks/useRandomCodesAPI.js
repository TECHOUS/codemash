import { useCallback } from 'react';
import {
    SET_RANDOM_CODES,
    STOP_IS_LOADING_FOR_RANDOM_CODES,
} from './useRatingPopupReducer.js';

export function useRandomCodesAPI(ratingPopupDispatch) {
    const callRandomCodesAPI = useCallback(async () => {
        try {
            const response = await fetch(import.meta.env.VITE_RANDOM_CODES);
            const parsedResponse = await response.json();
            ratingPopupDispatch({
                type: SET_RANDOM_CODES,
                payload: {
                    randomCodesResponse: parsedResponse,
                },
            });
        } catch (e) {
            ratingPopupDispatch({
                type: SET_RANDOM_CODES,
                payload: {
                    randomCodesResponse: {
                        status: 500,
                        error: e,
                    },
                },
            });
        }
        ratingPopupDispatch({
            type: STOP_IS_LOADING_FOR_RANDOM_CODES,
        });
    }, [ratingPopupDispatch]);

    return {
        callRandomCodesAPI,
    };
}

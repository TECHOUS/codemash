import { useEffect, useCallback } from 'react';
import { SET_INNER_WIDTH } from './useRatingPopupReducer.js';

export function useWindowWidth(innerWidth, ratingPopupDispatch) {
    const handleResize = useCallback(() => {
        ratingPopupDispatch({
            type: SET_INNER_WIDTH,
            payload: {
                innerWidth: window.innerWidth,
            },
        });
    }, [ratingPopupDispatch]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        ratingPopupDispatch({
            type: SET_INNER_WIDTH,
            payload: {
                innerWidth: window.innerWidth,
            },
        });
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize, ratingPopupDispatch]);
}

import { useReducer } from 'react';

const initialState = {
    innerWidth: window.innerWidth,
    randomCodesResponse: {},
    isLoadingForRandomCodes: true,
    ratingStarObj: {
        firstStar: false,
        secondStar: false,
    },
};

/**
 * actions
 **/
export const SET_INNER_WIDTH = 'SET_INNER_WIDTH';
export const SET_RANDOM_CODES = 'SET_RANDOM_CODES';
export const STOP_IS_LOADING_FOR_RANDOM_CODES =
    'STOP_IS_LOADING_FOR_RANDOM_CODES';
export const SELECT_STAR = 'SELECT_STAR';
export const UNSELECT_STAR = 'UNSELECT_STAR';

/**
 * functions
 **/
const selectStar = (oldState, payload) => {
    const newState = { ...oldState };
    newState[payload.stateKey] = true;
    newState[payload.otherStateKey] = false;
    return newState;
};

const unselectStar = (oldState, payload) => {
    const newState = { ...oldState };
    newState[payload.stateKey] = false;
    newState[payload.otherStateKey] = true;
    return newState;
};

/**
 * @param currentState
 * @param action - object passed from dispatch function
 * @return the new updated state
 **/
function reducer(currentState, action) {
    switch (action.type) {
        case SET_INNER_WIDTH:
            return { ...currentState, innerWidth: action.payload.innerWidth };
        case SET_RANDOM_CODES:
            return {
                ...currentState,
                randomCodesResponse: action.payload.randomCodesResponse,
            };
        case STOP_IS_LOADING_FOR_RANDOM_CODES:
            return {
                ...currentState,
                isLoadingForRandomCodes: false,
            };
        case SELECT_STAR:
            return {
                ...currentState,
                ratingStarObj: selectStar(
                    currentState.ratingStarObj,
                    action.payload
                ),
            };
        case UNSELECT_STAR:
            return {
                ...currentState,
                ratingStarObj: unselectStar(
                    currentState.ratingStarObj,
                    action.payload
                ),
            };
        default:
            return currentState;
    }
}

export function useRatingPopupReducer() {
    return useReducer(reducer, initialState);
}

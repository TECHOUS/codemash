import { useReducer } from 'react';

const initialState = {
    searchUserResponse: {},
    isSearchResponseLoading: false,
    isScoreReactionPageOpen: false,
};

/**
 * actions
 **/
export const SET_SEARCH_USER_RESPONSE = 'SET_SEARCH_USER_RESPONSE';
export const START_SEARCH_RESPONSE_LOADING = 'START_SEARCH_RESPONSE_LOADING';
export const STOP_SEARCH_RESPONSE_LOADING = 'STOP_SEARCH_RESPONSE_LOADING';
export const OPEN_SCORE_REACTION_BOARD = 'OPEN_SCORE_REACTION_BOARD';
export const CLOSE_SCORE_REACTION_BOARD = 'CLOSE_SCORE_REACTION_BOARD';

/**
 * @param currentState
 * @param action - object passed from dispatch function
 * @return the new updated state
 **/
function reducer(currentState, action) {
    switch (action.type) {
        case SET_SEARCH_USER_RESPONSE:
            return {
                ...currentState,
                searchUserResponse: action.payload.searchUserResponse,
            };
        case START_SEARCH_RESPONSE_LOADING:
            return {
                ...currentState,
                isSearchResponseLoading: true,
            };
        case STOP_SEARCH_RESPONSE_LOADING:
            return {
                ...currentState,
                isSearchResponseLoading: false,
            };
        case OPEN_SCORE_REACTION_BOARD:
            return {
                ...currentState,
                isScoreReactionPageOpen: true,
            };
        case CLOSE_SCORE_REACTION_BOARD:
            return {
                ...currentState,
                isScoreReactionPageOpen: false,
            };
        default:
            return currentState;
    }
}

export function useSearchSectionReducer() {
    return useReducer(reducer, initialState);
}

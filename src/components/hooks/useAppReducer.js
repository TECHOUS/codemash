import { useReducer } from 'react';

const initialState = {
    isPopupOpened: false,
    accessToken: '',
    toastMessages: [],
};

/**
 * actions
 **/
export const SET_POP_UP_OPENED = 'SET_POP_UP_OPENED';
export const SET_POP_UP_CLOSED = 'SET_POP_UP_CLOSED';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const ADD_TOAST_MESSAGE = 'ADD_TOAST_MESSAGE';
export const REMOVE_TOAST_MESSAGE = 'REMOVE_TOAST_MESSAGE';

/**
 * functions
 **/
const addToastMessage = (toastMessages, payload) => {
    const newMessages = [...toastMessages];
    newMessages.push({
        message: payload.message,
        timestamp: payload.timestamp,
    });
    return newMessages;
};

const removeToastMessage = (toastMessages, payload) => {
    const newMessages = toastMessages.filter(
        (current) => current.timestamp != payload.timestampToRemove
    );
    return newMessages;
};

/**
 * @param currentState
 * @param action - object passed from dispatch function
 * @return the new updated state
 **/
function reducer(currentState, action) {
    switch (action.type) {
        case SET_POP_UP_OPENED:
            return { ...currentState, isPopupOpened: true };
        case SET_POP_UP_CLOSED:
            return { ...currentState, isPopupOpened: false };
        case SET_ACCESS_TOKEN:
            return { ...currentState, accessToken: action.payload.accessToken };
        case ADD_TOAST_MESSAGE:
            return {
                ...currentState,
                toastMessages: addToastMessage(
                    currentState.toastMessages,
                    action.payload
                ),
            };
        case REMOVE_TOAST_MESSAGE:
            return {
                ...currentState,
                toastMessages: removeToastMessage(
                    currentState.toastMessages,
                    action.payload
                ),
            };
        default:
            return currentState;
    }
}

export function useAppReducer() {
    return useReducer(reducer, initialState);
}

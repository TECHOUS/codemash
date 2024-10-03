import { useCallback } from 'react';
import {
    START_SEARCH_RESPONSE_LOADING,
    SET_SEARCH_USER_RESPONSE,
    STOP_SEARCH_RESPONSE_LOADING,
} from '../hooks/useSearchSectionReducer.js';

export default function useSearchUserAPI(searchSectionDispatch, accessToken) {
    const callSearchUserAPI = useCallback(
        async (username) => {
            console.log(accessToken);
            try {
                const endpoint = `${
                    import.meta.env.VITE_SEARCH_USER
                }?username=${username}&sendContent=false`;

                const response = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const parsedResponse = await response.json();
                console.log(parsedResponse);
                return parsedResponse;
            } catch (e) {
                console.log(e);
                return {
                    status: 500,
                    message: 'Exception occurred while searching the user data',
                };
            }
        },
        [accessToken]
    );

    const searchUserAndStoreResponse = useCallback(
        async (username) => {
            searchSectionDispatch({
                type: START_SEARCH_RESPONSE_LOADING,
            });
            const responseJson = await callSearchUserAPI(username);
            if (responseJson.status) {
                searchSectionDispatch({
                    type: SET_SEARCH_USER_RESPONSE,
                    payload: {
                        searchUserResponse: responseJson,
                    },
                });
            }
            searchSectionDispatch({
                type: STOP_SEARCH_RESPONSE_LOADING,
            });
        },
        [searchSectionDispatch, callSearchUserAPI]
    );

    return { searchUserAndStoreResponse };
}

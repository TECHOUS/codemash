import { useState, useCallback } from 'react';

export function useRandomCodesAPI() {
    const [randomCodesResponse, setRandomCodesResponse] = useState({});
    const [isLoadingForRandomCodes, setIsLoadingForRandomCodes] =
        useState(true);

    const callRandomCodesAPI = useCallback(async () => {
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
        setIsLoadingForRandomCodes(false);
    }, []);

    return {
        randomCodesResponse,
        isLoadingForRandomCodes,
        callRandomCodesAPI,
    };
}

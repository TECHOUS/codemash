import { useCallback } from 'react';

export function useRandomCodesAPI() {
    const callRandomCodesAPI = useCallback(async () => {
        let parsedResponse = {};
        try {
            const response = await fetch(import.meta.env.VITE_RANDOM_CODES);
            parsedResponse = await response.json();
        } catch (e) {
            parsedResponse = {
                status: 500,
                error: e,
            };
        }
        return parsedResponse;
    }, []);

    return {
        callRandomCodesAPI,
    };
}

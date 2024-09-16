import { useState, useEffect, useCallback } from 'react';

export function useWindowWidth() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setInnerWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return { innerWidth };
}

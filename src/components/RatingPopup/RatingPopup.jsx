import styles from './RatingPopup.module.css';
import { useState, useEffect, useCallback } from 'react';
import RatingPopupViewContent from './RatingPopupViewContent';

const RatingPopup = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [randomCodesResponse, setRandomCodesResponse] = useState({});
    const [ratingStarObj, setRatingStarObj] = useState({
        firstStar: false,
        secondStar: false,
    });
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        async function callRandomCodesAPI() {
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
            setIsLoading(false);
        }

        callRandomCodesAPI();
    }, []);

    return (
        <div className={styles.ratingPopup}>
            <h2 className={styles.ratingPopupH2}>
                Rate the code file which you see is having the better code style
            </h2>
            <RatingPopupViewContent
                innerWidth={innerWidth}
                isLoading={isLoading}
                randomCodesResponse={randomCodesResponse}
                ratingStarObj={ratingStarObj}
                setRatingStarObj={setRatingStarObj}
            />
            <div>done button</div>
        </div>
    );
};

export default RatingPopup;

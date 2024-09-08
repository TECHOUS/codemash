import styles from './RatingPopup.module.css';
import { useState, useEffect, useCallback } from 'react';
import RatingPopupViewContent from './RatingPopupViewContent';

const RatingPopup = () => {
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

    return (
        <div className={styles.ratingPopup}>
            <h2 className={styles.ratingPopupH2}>
                Rate the code file which you see is having the better code style
            </h2>
            <RatingPopupViewContent innerWidth={innerWidth} />
            <div>done button</div>
        </div>
    );
};

export default RatingPopup;

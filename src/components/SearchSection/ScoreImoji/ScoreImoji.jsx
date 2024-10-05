import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styles from './ScoreImoji.module.css';

const ScoreImoji = ({ codeRating, size }) => {
    const computeClassName = useMemo(() => {
        let faceClassName = '';
        if (codeRating <= -8000) {
            faceClassName = 'fa-face-angry';
        } else if (codeRating > -8000 && codeRating <= -7000) {
            faceClassName = 'fa-face-tired';
        } else if (codeRating > -7000 && codeRating <= -6000) {
            faceClassName = 'fa-face-dizzy';
        } else if (codeRating > -6000 && codeRating <= -5000) {
            faceClassName = 'fa-face-grimace';
        } else if (codeRating > -5000 && codeRating <= -4000) {
            faceClassName = 'fa-face-flushed';
        } else if (codeRating > -4000 && codeRating <= -3000) {
            faceClassName = 'fa-face-frown-open';
        } else if (codeRating > -3000 && codeRating <= -2000) {
            faceClassName = 'fa-face-frown';
        } else if (codeRating > -2000 && codeRating <= -1000) {
            faceClassName = 'fa-face-sad-tear';
        } else if (codeRating > -1000 && codeRating <= 0) {
            faceClassName = 'fa-face-meh';
        } else if (codeRating > 0 && codeRating <= 1000) {
            faceClassName = 'fa-face-smile';
        } else if (codeRating > 1000 && codeRating <= 2000) {
            faceClassName = 'fa-face-smile-beam';
        } else if (codeRating > 2000 && codeRating <= 3000) {
            faceClassName = 'fa-face-grin';
        } else if (codeRating > 3000 && codeRating <= 4000) {
            faceClassName = 'fa-face-grin-wide';
        } else if (codeRating > 4000 && codeRating <= 5000) {
            faceClassName = 'fa-face-grin-beam';
        } else if (codeRating > 5000 && codeRating <= 6000) {
            faceClassName = 'fa-face-grin-squint';
        } else if (codeRating > 6000 && codeRating <= 7000) {
            faceClassName = 'fa-face-laugh';
        } else if (codeRating > 7000 && codeRating <= 8000) {
            faceClassName = 'fa-face-laugh-beam';
        } else if (codeRating > 8000 && codeRating <= 9000) {
            faceClassName = 'fa-face-laugh-squint';
        } else if (codeRating > 9000 && codeRating <= 10000) {
            faceClassName = 'fa-face-grin-stars';
        } else if (codeRating > 10000) {
            faceClassName = 'fa-face-grin-hearts';
        }
        return `fa-solid ${size} ${faceClassName} ${styles.scoreImojiIcon}`;
    }, [codeRating, size]);

    return <i className={computeClassName}></i>;
};

ScoreImoji.propTypes = {
    codeRating: PropTypes.number,
    size: PropTypes.string,
};

export default ScoreImoji;

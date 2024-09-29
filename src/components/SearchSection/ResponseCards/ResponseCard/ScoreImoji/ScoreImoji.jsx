import PropTypes from 'prop-types';
import { useMemo } from 'react';

const ScoreImoji = ({ codeRating }) => {
    const computeClassName = useMemo(() => {
        if (codeRating <= -8000) {
            return 'fa-solid fa-face-angry';
        } else if (codeRating > -8000 && codeRating <= -7000) {
            return 'fa-solid fa-face-tired';
        } else if (codeRating > -7000 && codeRating <= -6000) {
            return 'fa-solid fa-face-dizzy';
        } else if (codeRating > -6000 && codeRating <= -5000) {
            return 'fa-solid fa-face-grimace';
        } else if (codeRating > -5000 && codeRating <= -4000) {
            return 'fa-solid fa-face-flushed';
        } else if (codeRating > -4000 && codeRating <= -3000) {
            return 'fa-solid fa-face-frown-open';
        } else if (codeRating > -3000 && codeRating <= -2000) {
            return 'fa-solid fa-face-frown';
        } else if (codeRating > -2000 && codeRating <= -1000) {
            return 'fa-solid fa-face-sad-tear';
        } else if (codeRating > -1000 && codeRating <= 0) {
            return 'fa-solid fa-face-meh';
        } else if (codeRating > 0 && codeRating <= 1000) {
            return 'fa-solid fa-face-smile';
        } else if (codeRating > 1000 && codeRating <= 2000) {
            return 'fa-solid fa-face-smile-beam';
        } else if (codeRating > 2000 && codeRating <= 3000) {
            return 'fa-solid fa-face-grin';
        } else if (codeRating > 3000 && codeRating <= 4000) {
            return 'fa-solid fa-face-grin-wide';
        } else if (codeRating > 4000 && codeRating <= 5000) {
            return 'fa-solid fa-face-grin-beam';
        } else if (codeRating > 5000 && codeRating <= 6000) {
            return 'fa-solid fa-face-grin-squint';
        } else if (codeRating > 6000 && codeRating <= 7000) {
            return 'fa-solid fa-face-laugh';
        } else if (codeRating > 7000 && codeRating <= 8000) {
            return 'fa-solid fa-face-laugh-beam';
        } else if (codeRating > 8000 && codeRating <= 9000) {
            return 'fa-solid fa-face-laugh-squint';
        } else if (codeRating > 9000 && codeRating <= 10000) {
            return 'fa-solid fa-face-grin-stars';
        } else if (codeRating > 10000 && codeRating <= 11000) {
            return 'fa-solid fa-face-grin-hearts';
        }
    }, [codeRating]);

    return <i className={computeClassName}></i>;
};

ScoreImoji.propTypes = {
    codeRating: PropTypes.number,
};

export default ScoreImoji;

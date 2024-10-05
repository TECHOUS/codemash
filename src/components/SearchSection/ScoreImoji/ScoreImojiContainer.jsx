import ScoreImoji from './ScoreImoji.jsx';
import PropTypes from 'prop-types';
import { OPEN_SCORE_REACTION_BOARD } from '../../hooks/useSearchSectionReducer.js';
import styles from './ScoreImojiContainer.module.css';

const ScoreImojiContainer = ({ codeRating, searchSectionDispatch, size }) => {
    function handleClick() {
        searchSectionDispatch({
            type: OPEN_SCORE_REACTION_BOARD,
        });
    }

    return (
        <div onClick={handleClick} className={styles.scoreImojiContainer}>
            <ScoreImoji codeRating={codeRating} size={size} />
        </div>
    );
};

ScoreImojiContainer.propTypes = {
    codeRating: PropTypes.number,
    searchSectionDispatch: PropTypes.func,
    size: PropTypes.string,
};

export default ScoreImojiContainer;

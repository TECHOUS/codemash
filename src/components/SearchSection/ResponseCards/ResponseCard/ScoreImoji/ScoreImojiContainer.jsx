import ScoreImoji from './ScoreImoji';
import PropTypes from 'prop-types';
import { OPEN_SCORE_REACTION_BOARD } from '../../../../hooks/useSearchSectionReducer.js';

const ScoreImojiContainer = ({ codeRating, searchSectionDispatch }) => {
    function handleClick() {
        searchSectionDispatch({
            type: OPEN_SCORE_REACTION_BOARD,
        });
    }

    return (
        <div onClick={handleClick}>
            <ScoreImoji codeRating={codeRating} />
        </div>
    );
};

ScoreImojiContainer.propTypes = {
    codeRating: PropTypes.number,
    searchSectionDispatch: PropTypes.func,
};

export default ScoreImojiContainer;

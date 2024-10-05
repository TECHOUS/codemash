import PropTypes from 'prop-types';
import ScoreReactionBoardContainer from './ScoreReactionBoardContainer.jsx';

const ScoreReactionBoardHandler = ({
    isScoreReactionPageOpen,
    searchSectionDispatch,
}) => {
    if (isScoreReactionPageOpen) {
        return (
            <ScoreReactionBoardContainer
                searchSectionDispatch={searchSectionDispatch}
            />
        );
    } else {
        return <></>;
    }
};

ScoreReactionBoardHandler.propTypes = {
    isScoreReactionPageOpen: PropTypes.bool,
    searchSectionDispatch: PropTypes.func,
};

export default ScoreReactionBoardHandler;

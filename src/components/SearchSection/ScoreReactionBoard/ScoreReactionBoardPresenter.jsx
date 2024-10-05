import PropTypes from 'prop-types';
import SRBCrossIcon from './SRBCrossIcon';
import styles from './ScoreReactionBoardPresenter.module.css';
import ScoreReactionTable from './ScoreReactionTable';

const ScoreReactionBoardPresenter = ({
    closeScoreReactionBoard,
    scoreReactionBoardList,
}) => {
    return (
        <div className={styles.scoreReactionBoardPresenter}>
            <div className={styles.scoreReactionBoardContent}>
                <SRBCrossIcon
                    closeScoreReactionBoard={closeScoreReactionBoard}
                />
                <ScoreReactionTable
                    scoreReactionBoardList={scoreReactionBoardList}
                />
            </div>
        </div>
    );
};

ScoreReactionBoardPresenter.propTypes = {
    closeScoreReactionBoard: PropTypes.func,
    scoreReactionBoardList: PropTypes.array,
};

export default ScoreReactionBoardPresenter;

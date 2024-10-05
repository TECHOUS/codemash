import PropTypes from 'prop-types';
import styles from './ScoreReactionTable.module.css';
import SRTableRows from './SRTableRows';

const ScoreReactionTable = ({ scoreReactionBoardList }) => {
    return (
        <div className={styles.scoreReactionTable}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.header}>Score</th>
                        <th className={styles.header}>Reaction</th>
                    </tr>
                </thead>
                <tbody>
                    <SRTableRows
                        scoreReactionBoardList={scoreReactionBoardList}
                    />
                </tbody>
            </table>
        </div>
    );
};

ScoreReactionTable.propTypes = {
    scoreReactionBoardList: PropTypes.array,
};

export default ScoreReactionTable;

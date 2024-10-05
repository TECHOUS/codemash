import PropTypes from 'prop-types';
import SRTableRow from './SRTableRow';

const SRTableRows = ({ scoreReactionBoardList }) => {
    return scoreReactionBoardList.map((scoreReactionBoardObj) => (
        <SRTableRow
            key={scoreReactionBoardObj.label}
            scoreReactionBoardObj={scoreReactionBoardObj}
        />
    ));
};

SRTableRows.propTypes = {
    scoreReactionBoardList: PropTypes.array,
};

export default SRTableRows;

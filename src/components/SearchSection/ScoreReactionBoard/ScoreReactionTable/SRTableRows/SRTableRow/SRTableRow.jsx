import PropTypes from 'prop-types';
import SRTableData from '../SRTableData/SRTableData';

const SRTableRow = ({ scoreReactionBoardObj }) => {
    return (
        <tr>
            <SRTableData type="data" data={scoreReactionBoardObj.label} />
            <SRTableData type="imoji" rating={scoreReactionBoardObj.score} />
        </tr>
    );
};

SRTableRow.propTypes = {
    scoreReactionBoardObj: PropTypes.object,
};

export default SRTableRow;

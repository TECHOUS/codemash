import PropTypes from 'prop-types';
import ScoreImoji from '../../../../ScoreImoji/ScoreImoji.jsx';
import styles from './SRTableData.module.css';

const SRTableData = ({ type, data, rating }) => {
    if (type === 'imoji') {
        return (
            <td className={styles.scoreImojiTd}>
                <ScoreImoji codeRating={rating} size="fa-2x" />
            </td>
        );
    } else {
        return <td className={styles.dataTd}>{data}</td>;
    }
};

SRTableData.propTypes = {
    type: PropTypes.string,
    data: PropTypes.string,
    rating: PropTypes.number,
};

export default SRTableData;

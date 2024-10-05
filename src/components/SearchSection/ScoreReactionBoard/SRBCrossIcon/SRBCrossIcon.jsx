import PropTypes from 'prop-types';
import styles from './SRBCrossIcon.module.css';

const SRBCrossIcon = ({ closeScoreReactionBoard }) => {
    return (
        <div className={styles.srbCrossIcon}>
            <span onClick={closeScoreReactionBoard}>
                <i className="fa-solid fa-2x fa-xmark"></i>
            </span>
        </div>
    );
};

SRBCrossIcon.propTypes = {
    closeScoreReactionBoard: PropTypes.func,
};

export default SRBCrossIcon;

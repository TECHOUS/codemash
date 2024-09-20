import PropTypes from 'prop-types';
import DotSpinner from './DotSpinner.jsx';
import styles from './DotSpinnerContainer.module.css';

const DotSpinnerContainer = ({ dotCount }) => {
    return (
        <div className={styles.dotSpinnerContainer}>
            <DotSpinner dotCount={dotCount} />
        </div>
    );
};

DotSpinnerContainer.propTypes = {
    dotCount: PropTypes.number,
};

export default DotSpinnerContainer;

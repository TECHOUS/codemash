import styles from './DotSpinner.module.css';
import Dot from './Dot';
import PropTypes from 'prop-types';

const DotSpinner = ({ dotCount }) => {
    return (
        <div className={styles.spinnerContainer}>
            {[...Array(dotCount)].map((_, index) => (
                <Dot key={index} index={index} />
            ))}
        </div>
    );
};

DotSpinner.propTypes = {
    dotCount: PropTypes.number,
};

export default DotSpinner;

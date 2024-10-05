import PropTypes from 'prop-types';
import styles from './CardContent.module.css';

const CardContent = ({ codeRating, codeName }) => {
    return (
        <div className={styles.cardContent}>
            <h2 className={styles.codeRating}>{codeRating}</h2>
            <h3 className={styles.codeName}>{codeName}</h3>
        </div>
    );
};

CardContent.propTypes = {
    codeRating: PropTypes.number,
    codeName: PropTypes.string,
};

export default CardContent;

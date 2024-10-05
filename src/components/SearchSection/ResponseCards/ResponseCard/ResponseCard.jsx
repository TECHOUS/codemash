import PropTypes from 'prop-types';
import ScoreImoji from '../../ScoreImoji';
import CardContent from './CardContent';
import styles from './ResponseCard.module.css';

const ResponseCard = ({ userCodeBaseFile, searchSectionDispatch }) => {
    return (
        <div className={styles.responseCard}>
            <ScoreImoji
                codeRating={userCodeBaseFile.codeRating}
                searchSectionDispatch={searchSectionDispatch}
                size="fa-3x"
            />
            <CardContent
                codeRating={userCodeBaseFile.codeRating}
                codeName={userCodeBaseFile.codeName}
            />
        </div>
    );
};

ResponseCard.propTypes = {
    userCodeBaseFile: PropTypes.object,
    searchSectionDispatch: PropTypes.func,
};

export default ResponseCard;

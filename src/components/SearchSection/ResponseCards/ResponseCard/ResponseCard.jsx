import PropTypes from 'prop-types';
import ScoreImoji from './ScoreImoji';
import CardContent from './CardContent';

const ResponseCard = ({ userCodeBaseFile, searchSectionDispatch }) => {
    return (
        <div>
            <ScoreImoji
                codeRating={userCodeBaseFile.codeRating}
                searchSectionDispatch={searchSectionDispatch}
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

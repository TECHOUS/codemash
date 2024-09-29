import PropTypes from 'prop-types';
import ResponseCard from './ResponseCard/ResponseCard.jsx';

const ResponseCards = ({ userCodeBaseFiles, searchSectionDispatch }) => {
    return userCodeBaseFiles.map((userCodeBaseFile) => (
        <ResponseCard
            key={userCodeBaseFile.codeId}
            userCodeBaseFile={userCodeBaseFile}
            searchSectionDispatch={searchSectionDispatch}
        />
    ));
};

ResponseCards.propTypes = {
    userCodeBaseFiles: PropTypes.array,
    searchSectionDispatch: PropTypes.func,
};

export default ResponseCards;

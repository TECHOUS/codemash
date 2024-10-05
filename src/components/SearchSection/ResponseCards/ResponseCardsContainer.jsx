import PropTypes from 'prop-types';
import ResponseCards from './ResponseCards.jsx';

const ResponseCardsContainer = ({
    userCodeBaseFiles,
    searchSectionDispatch,
}) => {
    return (
        <div>
            <ResponseCards
                userCodeBaseFiles={userCodeBaseFiles}
                searchSectionDispatch={searchSectionDispatch}
            />
        </div>
    );
};

ResponseCardsContainer.propTypes = {
    userCodeBaseFiles: PropTypes.array,
    searchSectionDispatch: PropTypes.func,
};

export default ResponseCardsContainer;

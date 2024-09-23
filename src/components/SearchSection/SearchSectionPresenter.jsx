import PropTypes from 'prop-types';
import SearchBar from './SearchBar/SearchBar.jsx';
import ResponseHandler from './ResponseHandler/ResponseHandler.jsx';
import ContributionGuidelines from './ContributionGuidelines/ContributionGuidelines.jsx';
import ScoreReactionBoardHandler from './ScoreReactionBoard';

const SearchSectionPresenter = ({
    state,
    searchUserAndStoreResponse,
    searchSectionDispatch,
}) => {
    return (
        <div>
            <h2>
                Let&apos;s see what rating do you got for the contributed code
            </h2>
            <SearchBar
                searchUserAndStoreResponse={searchUserAndStoreResponse}
            />
            <ResponseHandler
                state={state}
                searchSectionDispatch={searchSectionDispatch}
            />
            <h2>
                All the Contributions are welcome, you can check our{' '}
                <ContributionGuidelines />
            </h2>
            <ScoreReactionBoardHandler
                isScoreReactionPageOpen={state.isScoreReactionPageOpen}
                searchSectionDispatch={searchSectionDispatch}
            />
        </div>
    );
};

SearchSectionPresenter.propTypes = {
    state: PropTypes.object,
    searchUserAndStoreResponse: PropTypes.object,
    searchSectionDispatch: PropTypes.func,
};

export default SearchSectionPresenter;

import PropTypes from 'prop-types';
import SearchSectionPresenter from './SearchSectionPresenter.jsx';
import { useSearchSectionReducer } from '../hooks/useSearchSectionReducer.js';
import useSearchUserAPI from '../hooks/useSearchUserAPI.js';

const SearchSectionContainer = ({ accessToken }) => {
    const [state, searchSectionDispatch] = useSearchSectionReducer();
    const { searchUserAndStoreResponse } = useSearchUserAPI(
        searchSectionDispatch,
        accessToken
    );

    return (
        <SearchSectionPresenter
            state={state}
            searchUserAndStoreResponse={searchUserAndStoreResponse}
            searchSectionDispatch={searchSectionDispatch}
        />
    );
};

SearchSectionContainer.propTypes = {
    accessToken: PropTypes.string,
};

export default SearchSectionContainer;

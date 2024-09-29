import PropTypes from 'prop-types';
import DotSpinner from '../../DotSpinner';
import ErrorMessage from '../../ErrorMessage';
import ResponseCards from '../ResponseCards';

const ResponseHandler = ({ state, searchSectionDispatch }) => {
    if (state.isSearchResponseLoading) {
        return <DotSpinner dotCount={5} />;
    } else if (state.searchUserResponse.status === 401) {
        return (
            <ErrorMessage
                errorMessage="Please rate the code again in above section"
                iconClasses="fa-solid fa-triangle-exclamation fa-2x"
            />
        );
    } else if (
        state.searchUserResponse.status === 200 &&
        state.searchUserResponse.userCodeBaseFiles.length > 0
    ) {
        return (
            <ResponseCards
                userCodeBaseFiles={state.searchUserResponse.userCodeBaseFiles}
                searchSectionDispatch={searchSectionDispatch}
            />
        );
    } else {
        return (
            <ErrorMessage
                errorMessage="No results Found !!"
                iconClasses="fa-solid fa-poo fa-2x"
            />
        );
    }
};

ResponseHandler.propTypes = {
    state: PropTypes.object,
    searchSectionDispatch: PropTypes.func,
};

export default ResponseHandler;

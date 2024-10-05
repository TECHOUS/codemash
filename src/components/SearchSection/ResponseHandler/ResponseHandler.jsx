import PropTypes from 'prop-types';
import DotSpinner from '../../DotSpinner';
import ErrorMessage from '../../ErrorMessage';
import ResponseCards from '../ResponseCards';
import styles from './ResponseHandler.module.css';

const ResponseHandler = ({ state, searchSectionDispatch }) => {
    if (state.isSearchResponseLoading) {
        return <DotSpinner dotCount={5} />;
    } else if (state.searchUserResponse.status === 401) {
        return (
            <div className={styles.errorMessageContainer}>
                <ErrorMessage
                    errorMessage="Please rate the code again in above section"
                    iconClasses="fa-solid fa-triangle-exclamation fa-2x"
                />
            </div>
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
            <div className={styles.errorMessageContainer}>
                <ErrorMessage
                    errorMessage="No results Found !!"
                    iconClasses="fa-solid fa-poo fa-2x"
                />
            </div>
        );
    }
};

ResponseHandler.propTypes = {
    state: PropTypes.object,
    searchSectionDispatch: PropTypes.func,
};

export default ResponseHandler;

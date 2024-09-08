import PropTypes from 'prop-types';
import RPMCodeObject from './RPMCodeObject';

const RPMobileContentViewer = ({ randomCodesResponse }) => {
    return (
        <>
            <RPMCodeObject codeObject={randomCodesResponse.codeObject1} />
            <RPMCodeObject codeObject={randomCodesResponse.codeObject2} />
        </>
    );
};

RPMobileContentViewer.propTypes = {
    randomCodesResponse: PropTypes.object,
};

export default RPMobileContentViewer;

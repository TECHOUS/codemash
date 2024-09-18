import PropTypes from 'prop-types';
import DotSpinner from './DotSpinner.jsx';

const DotSpinnerContainer = ({ dotCount }) => {
    return (
        <div>
            <DotSpinner dotCount={dotCount} />;
        </div>
    );
};

DotSpinnerContainer.propTypes = {
    dotCount: PropTypes.number,
};

export default DotSpinnerContainer;

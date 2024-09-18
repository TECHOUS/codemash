import PropTypes from 'prop-types';

const CrossIcon = ({ hideToastMessage }) => {
    return (
        <span onClick={hideToastMessage}>
            <i className="fa-solid fa-xmark"></i>
        </span>
    );
};

CrossIcon.propTypes = {
    hideToastMessage: PropTypes.func,
};

export default CrossIcon;

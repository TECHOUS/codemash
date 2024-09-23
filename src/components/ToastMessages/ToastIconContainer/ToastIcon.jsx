import PropTypes from 'prop-types';

const ToastIcon = ({ type }) => {
    switch (type) {
        case 'SUCCESS':
            return <i className="fa-solid fa-2x fa-circle-check"></i>;
        case 'ERROR':
            return <i className="fa-solid fa-2x fa-circle-exclamation"></i>;
        default:
            return <></>;
    }
};

ToastIcon.propTypes = {
    type: PropTypes.string,
};

export default ToastIcon;

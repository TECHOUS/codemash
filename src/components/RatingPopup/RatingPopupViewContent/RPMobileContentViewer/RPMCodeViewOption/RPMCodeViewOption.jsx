import PropTypes from 'prop-types';

const RPMCodeViewOption = ({ setViewCode }) => {
    function handleClick() {
        setViewCode(true);
    }

    return (
        <div onClick={handleClick}>
            <div>
                <i className="fa-regular fa-file-code"></i>
            </div>
            <h2>View</h2>
        </div>
    );
};

RPMCodeViewOption.propTypes = {
    setViewCode: PropTypes.func,
};

export default RPMCodeViewOption;

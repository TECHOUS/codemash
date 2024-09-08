import PropTypes from 'prop-types';

const RPMCodeViewer = ({ content, setViewCode }) => {
    function handleClick() {
        setViewCode(false);
    }

    return (
        <div>
            <div>{content}</div>
            <div>
                <span onClick={handleClick}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </div>
        </div>
    );
};

RPMCodeViewer.propTypes = {
    content: PropTypes.string,
    setViewCode: PropTypes.func,
};

export default RPMCodeViewer;

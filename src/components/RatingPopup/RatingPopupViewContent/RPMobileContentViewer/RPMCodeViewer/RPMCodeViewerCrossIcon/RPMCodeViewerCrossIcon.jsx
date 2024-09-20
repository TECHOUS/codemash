import PropTypes from 'prop-types';
import styles from './RPMCodeViewerCrossIcon.module.css';

const RPMCodeViewerCrossIcon = ({ setViewCode }) => {
    const handleClick = () => {
        setViewCode(false);
    };

    return (
        <div className={styles.rpmCodeViewerCrossIconDiv}>
            <span onClick={handleClick}>
                <i className="fa-solid fa-2x fa-xmark"></i>
            </span>
        </div>
    );
};

RPMCodeViewerCrossIcon.propTypes = {
    setViewCode: PropTypes.func,
};

export default RPMCodeViewerCrossIcon;

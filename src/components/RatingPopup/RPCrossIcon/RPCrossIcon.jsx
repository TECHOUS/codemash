import PropTypes from 'prop-types';
import styles from './RPCrossIcon.module.css';
import { useMemo } from 'react';

const RPCrossIcon = ({ innerWidth, closeRatingPopup }) => {
    const computeClassName = useMemo(() => {
        if (innerWidth <= 768) {
            return styles.mobileRPCrossIcon;
        } else {
            return styles.desktopRPCrossIcon;
        }
    }, [innerWidth]);

    return (
        <div className={computeClassName}>
            <span onClick={closeRatingPopup}>
                <i className="fa-solid fa-2x fa-xmark"></i>
            </span>
        </div>
    );
};

RPCrossIcon.propTypes = {
    innerWidth: PropTypes.number,
    closeRatingPopup: PropTypes.func,
};

export default RPCrossIcon;

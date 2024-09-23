/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import styles from './RPMCodeViewOption.module.css';
import { memo } from 'react';

const RPMCodeViewOption = ({ setViewCode }) => {
    console.log('RPMCodeViewOption rendered');

    function handleClick() {
        setViewCode(true);
    }

    return (
        <div onClick={handleClick} className={styles.rpmCodeViewOption}>
            <div>
                <i className={`fa-regular fa-file-code ${styles.fileIcon}`}></i>
            </div>
            <h2 className={styles.viewH2}>View</h2>
        </div>
    );
};

RPMCodeViewOption.propTypes = {
    setViewCode: PropTypes.func,
};

export default memo(RPMCodeViewOption);

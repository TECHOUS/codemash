/* eslint-disable react-refresh/only-export-components */
import DoneButton from './DoneButton.jsx';
import styles from './DoneButtonContainer.module.css';
import { memo } from 'react';
import PropTypes from 'prop-types';

const DoneButtonContainer = ({ handleDoneButton }) => {
    return (
        <div className={styles.doneButtonDiv}>
            <DoneButton handleDoneButton={handleDoneButton} />
        </div>
    );
};

DoneButtonContainer.propTypes = {
    handleDoneButton: PropTypes.func,
};

export default memo(DoneButtonContainer);

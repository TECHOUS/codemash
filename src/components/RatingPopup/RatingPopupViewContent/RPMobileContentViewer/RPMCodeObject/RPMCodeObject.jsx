import PropTypes from 'prop-types';
import { useState } from 'react';
import RPMCodeViewOption from '../RPMCodeViewOption';
import RPMCodeViewer from '../RPMCodeViewer';
import styles from './RPMCodeObject.module.css';

const RPMCodeObject = ({ codeObject }) => {
    const [viewCode, setViewCode] = useState(false);

    if (viewCode) {
        <RPMCodeViewer
            content={codeObject.content}
            setViewCode={setViewCode}
        />;
    } else {
        return (
            <div className={styles.rpmCodeObject}>
                <RPMCodeViewOption setViewCode={setViewCode} />
                <p className={styles.codeName}>{codeObject.codeName}</p>
            </div>
        );
    }
};

RPMCodeObject.propTypes = {
    codeObject: PropTypes.object,
};

export default RPMCodeObject;

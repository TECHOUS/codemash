import PropTypes from 'prop-types';
import { useState } from 'react';
import RPMCodeViewOption from '../RPMCodeViewOption';
import RPMCodeViewer from '../RPMCodeViewer';
import styles from './RPMCodeObject.module.css';
import StarComponent from '../../StarComponent/StarComponent';

const RPMCodeObject = ({
    codeObject,
    stateKey,
    otherStateKey,
    ratingStarObj,
    ratingPopupDispatch,
}) => {
    const [viewCode, setViewCode] = useState(false);

    if (viewCode) {
        return (
            <RPMCodeViewer
                content={codeObject.content}
                setViewCode={setViewCode}
            />
        );
    } else {
        return (
            <div className={styles.rpmCodeObject}>
                <RPMCodeViewOption setViewCode={setViewCode} />
                <p className={styles.codeName}>{codeObject.codeName}</p>
                <StarComponent
                    stateKey={stateKey}
                    otherStateKey={otherStateKey}
                    ratingStarObj={ratingStarObj}
                    ratingPopupDispatch={ratingPopupDispatch}
                />
            </div>
        );
    }
};

RPMCodeObject.propTypes = {
    codeObject: PropTypes.object,
    stateKey: PropTypes.string,
    otherStateKey: PropTypes.string,
    ratingStarObj: PropTypes.object,
    ratingPopupDispatch: PropTypes.func,
};

export default RPMCodeObject;

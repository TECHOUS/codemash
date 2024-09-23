import PropTypes from 'prop-types';
import StarComponent from '../../StarComponent/StarComponent.jsx';
import RPDCodeViewer from '../RPDCodeViewer/RPDCodeViewer.jsx';
import styles from './RPDCodeObject.module.css';

const RPDCodeObject = ({
    codeObject,
    stateKey,
    otherStateKey,
    ratingStarObj,
    ratingPopupDispatch,
}) => {
    return (
        <div className={styles.rpdCodeObject}>
            <RPDCodeViewer content={codeObject.content} />
            <div className={styles.rpdCodeObjectBottomDiv}>
                <p className={styles.codeName}>{codeObject.codeName}</p>
                <StarComponent
                    stateKey={stateKey}
                    otherStateKey={otherStateKey}
                    ratingStarObj={ratingStarObj}
                    ratingPopupDispatch={ratingPopupDispatch}
                />
            </div>
        </div>
    );
};

RPDCodeObject.propTypes = {
    codeObject: PropTypes.object,
    stateKey: PropTypes.string,
    otherStateKey: PropTypes.string,
    ratingStarObj: PropTypes.object,
    ratingPopupDispatch: PropTypes.func,
};

export default RPDCodeObject;

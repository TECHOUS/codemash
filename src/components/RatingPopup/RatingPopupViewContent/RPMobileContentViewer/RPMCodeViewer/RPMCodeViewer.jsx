import PropTypes from 'prop-types';
import styles from './RPMCodeViewer.module.css';
import RPMContentParser from './RPMContentParser';
import RPMCodeViewerCrossIcon from './RPMCodeViewerCrossIcon/RPMCodeViewerCrossIcon.jsx';

const RPMCodeViewer = ({ content, setViewCode }) => {
    return (
        <div className={styles.rpmCodeViewer}>
            <div className={styles.contentParserDiv}>
                <RPMContentParser content={content} />
            </div>
            <RPMCodeViewerCrossIcon setViewCode={setViewCode} />
        </div>
    );
};

RPMCodeViewer.propTypes = {
    content: PropTypes.string,
    setViewCode: PropTypes.func,
};

export default RPMCodeViewer;

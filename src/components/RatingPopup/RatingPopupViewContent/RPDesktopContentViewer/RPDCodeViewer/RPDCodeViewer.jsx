import PropTypes from 'prop-types';
import ContentParser from '../../ContentParser';
import styles from './RPDCodeViewer.module.css';

const RPDCodeViewer = ({ content }) => {
    return (
        <div className={styles.rpdCodeViewer}>
            <ContentParser content={content} />
        </div>
    );
};

RPDCodeViewer.propTypes = {
    content: PropTypes.string,
};

export default RPDCodeViewer;

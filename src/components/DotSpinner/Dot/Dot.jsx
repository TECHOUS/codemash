import PropTypes from 'prop-types';
import dotStyles from './Dot.module.css';

const Dot = ({ index }) => {
    return (
        <div
            key={index}
            className={dotStyles.dot}
            style={{ animationDelay: `${index * 0.2}s` }}
        ></div>
    );
};

Dot.propTypes = {
    index: PropTypes.number,
};
export default Dot;

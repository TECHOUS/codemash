import PropTypes from 'prop-types';

const CardContent = ({ codeRating, codeName }) => {
    return (
        <div>
            <h2>{codeRating}</h2>
            <h2>{codeName}</h2>
        </div>
    );
};

CardContent.propTypes = {
    codeRating: PropTypes.string,
    codeName: PropTypes.string,
};

export default CardContent;

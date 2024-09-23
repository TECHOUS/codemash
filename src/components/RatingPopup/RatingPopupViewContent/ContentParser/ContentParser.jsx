/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import React from 'react';

const ContentParser = ({ content }) => {
    return content.split('\n').map((line, index) => (
        <div key={index}>
            {line.split('\t').map((segment, segmentIndex) => (
                <React.Fragment key={segmentIndex}>
                    {segment}
                    {segmentIndex < line.split('\t').length - 1 && (
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    )}
                </React.Fragment>
            ))}
            <br />
        </div>
    ));
};

ContentParser.propTypes = {
    content: PropTypes.string,
};

export default React.memo(ContentParser);

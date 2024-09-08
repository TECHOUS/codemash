import PropTypes from 'prop-types';
import { useState } from 'react';
import RPMCodeViewOption from '../RPMCodeViewOption';
import RPMCodeViewer from '../RPMCodeViewer';

const RPMCodeObject = ({ codeObject }) => {
    const [viewCode, setViewCode] = useState(false);

    if (viewCode) {
        <RPMCodeViewer
            content={codeObject.content}
            setViewCode={setViewCode}
        />;
    } else {
        return (
            <div>
                <RPMCodeViewOption setViewCode={setViewCode} />
                <div>{codeObject.codeName}</div>
            </div>
        );
    }
};

RPMCodeObject.propTypes = {
    codeObject: PropTypes.object,
};

export default RPMCodeObject;

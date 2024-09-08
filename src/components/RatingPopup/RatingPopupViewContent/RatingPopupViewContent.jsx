import PropTypes from 'prop-types';
import RPMobileContentViewer from './RPMobileContentViewer';
import RPDesktopContentViewer from './RPDesktopContentViewer';
import { useState, useEffect } from 'react';
import DotSpinner from '../../DotSpinner';
import ErrorMessage from '../../ErrorMessage';

const RatingPopupViewContent = ({ innerWidth }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [randomCodesResponse, setRandomCodesResponse] = useState({});
    const [firstStar, setFirstStar] = useState(false);
    const [secondStar, setSecondStar] = useState(false);

    useEffect(() => {
        async function callRandomCodesAPI() {
            try {
                const response = await fetch(import.meta.env.VITE_RANDOM_CODES);
                const parsedResponse = await response.json();
                setRandomCodesResponse(parsedResponse);
            } catch (e) {
                setRandomCodesResponse({
                    status: 500,
                    error: e,
                });
            }
            setIsLoading(false);
        }

        callRandomCodesAPI();
    }, []);

    if (isLoading) {
        return (
            <div>
                <DotSpinner dotCount={5} />;
            </div>
        );
    } else if (
        randomCodesResponse.status &&
        randomCodesResponse.status != 200
    ) {
        return (
            <ErrorMessage
                errorMessage="Unable to load! Please try again!!"
                iconClasses="fa-solid fa-circle-exclamation"
            />
        );
    } else if (innerWidth <= 768) {
        return (
            <RPMobileContentViewer randomCodesResponse={randomCodesResponse} />
        );
    } else {
        return <RPDesktopContentViewer />;
    }
};

RatingPopupViewContent.propTypes = {
    innerWidth: PropTypes.number,
};

export default RatingPopupViewContent;

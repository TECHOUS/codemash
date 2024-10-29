import PropTypes from 'prop-types';
import './HeaderLink.css';
import { SET_POP_UP_OPENED } from '../../../hooks/useAppReducer.js';
import { useRef, useEffect, useCallback } from 'react';

const HeaderLink = ({ linkName, href, appDispatch, isPopupOpened }) => {
    const linkRef = useRef(null);

    const openRatePopup = useCallback(() => {
        console.log('openRatePopup');
        if (!isPopupOpened) {
            appDispatch({
                type: SET_POP_UP_OPENED,
            });
        }
    }, [appDispatch, isPopupOpened]);

    useEffect(() => {
        const currentRef = linkRef.current;
        if (linkName === 'Rate' && currentRef) {
            currentRef.addEventListener('click', openRatePopup);
        }
        return () => {
            if (linkName === 'Rate' && currentRef) {
                currentRef.removeEventListener('click', openRatePopup);
            }
        };
    }, [linkName, openRatePopup]);

    return (
        <li className="header-link-li">
            <a href={href} className="header-link-a" ref={linkRef}>
                {linkName}
            </a>
        </li>
    );
};

// only valid for dev
HeaderLink.propTypes = {
    linkName: PropTypes.string,
    href: PropTypes.string,
    appDispatch: PropTypes.func,
    isPopupOpened: PropTypes.bool,
};

export default HeaderLink;

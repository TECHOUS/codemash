import './HeaderLinks.css';
import HeaderLink from './HeaderLink';
import PropTypes from 'prop-types';

const HeaderLinks = ({ appDispatch, isPopupOpened }) => {
    return (
        <div className="inline-header" id="desktop-header">
            <ul id="desktop-header-list">
                <HeaderLink
                    linkName="Rate"
                    href="#landing-section"
                    appDispatch={appDispatch}
                    isPopupOpened={isPopupOpened}
                />
                <HeaderLink linkName="Search" href="#searchSection" />
            </ul>
        </div>
    );
};

HeaderLinks.propTypes = {
    appDispatch: PropTypes.func,
    isPopupOpened: PropTypes.bool,
};

export default HeaderLinks;

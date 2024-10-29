import './Header.css';
import HeaderImg from './HeaderImg';
import HeaderLinks from './HeaderLinks';
import PropTypes from 'prop-types';

const Header = ({ appDispatch, isPopupOpened }) => {
    return (
        <div id="header-outer-div">
            <HeaderImg />
            <HeaderLinks
                appDispatch={appDispatch}
                isPopupOpened={isPopupOpened}
            />
        </div>
    );
};

Header.propTypes = {
    appDispatch: PropTypes.func,
    isPopupOpened: PropTypes.bool,
};

export default Header;

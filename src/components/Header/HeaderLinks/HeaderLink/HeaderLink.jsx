import PropTypes from 'prop-types';
import './HeaderLink.css';

const HeaderLink = ({ linkName, href }) => {
    return (
        <li className="header-link-li">
            <a href={href} className="header-link-a">
                {linkName}
            </a>
        </li>
    );
};

// only valid for dev
HeaderLink.propTypes = {
    linkName: PropTypes.string,
    href: PropTypes.string,
};

export default HeaderLink;

import './HeaderLinks.css';
import HeaderLink from './HeaderLink';

const HeaderLinks = () => {
    return (
        <div className="inline-header" id="desktop-header">
            <ul id="desktop-header-list">
                <HeaderLink linkName="Rate" href="#" />
                <HeaderLink linkName="Search" href="#" />
            </ul>
        </div>
    );
};

export default HeaderLinks;

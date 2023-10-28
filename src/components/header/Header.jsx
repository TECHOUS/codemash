import './Header.css';
import HeaderImg from './headerImg/HeaderImg';
import HeaderLinks from './headerLinks/HeaderLinks';

const Header = () => {
    return (
        <div id="header-outer-div">
            <HeaderImg />
            <HeaderLinks />
        </div>
    );
};

export default Header;

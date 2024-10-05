import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchUserAndStoreResponse }) => {
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const clickFind = async () => {
        if (username === '') {
            return;
        }
        await searchUserAndStoreResponse(username);
        setUsername('');
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.inputDiv}>
                <input
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleChange}
                    placeholder="GitHub Username"
                    autoComplete="on"
                />
            </div>
            <div className={styles.buttonDiv}>
                <button className={styles.button} onClick={clickFind}>
                    <span>
                        <i className="fa-solid fa-magnifying-glass-chart"></i>
                    </span>
                    &nbsp;&nbsp;
                    <span>Find</span>
                </button>
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    searchUserAndStoreResponse: PropTypes.func,
};

export default SearchBar;

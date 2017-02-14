import React from 'react';
import './Header.css';

const Header = ({ message }) => {
    return (
        <div className="header">
            <h1>{message}</h1>
        </div>
    );
}

Header.propTypes = {
    message: React.PropTypes.string
}

export default Header;
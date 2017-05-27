import React from 'react';
import PropTypes from 'prop-types';

import '../styles/DraftHeader.css';

const DraftHeader = ({ message, leftColor, rightColor, activeColor }) => {
    return (
        <div className={`draft-header ${leftColor}-${rightColor} active-${activeColor}`}>
            <h1 className="header-message">{message}</h1>
        </div>
    );
}

DraftHeader.propTypes = {
    message: PropTypes.string,
    leftColor: PropTypes.string.isRequired,
    rightColor: PropTypes.string.isRequired,
    activeColor: PropTypes.string
}

export default DraftHeader;

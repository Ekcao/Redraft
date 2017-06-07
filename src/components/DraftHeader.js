import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import '../styles/DraftHeader.css';

const DraftHeader = ({ message, leftColor, rightColor, activeColor }) => {
    return (
        <Header className={`draft-header ${leftColor}-${rightColor} active-${activeColor}`}>
            {message}
        </Header>
    );
}

DraftHeader.propTypes = {
    message: PropTypes.string,
    leftColor: PropTypes.string.isRequired,
    rightColor: PropTypes.string.isRequired,
    activeColor: PropTypes.string
}

export default DraftHeader;

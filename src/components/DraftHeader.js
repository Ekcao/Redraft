import React from 'react';
import './DraftHeader.css';

const DraftHeader = ({ message, leftColor, rightColor, activeColor }) => {
    return (
        <div className={`draft-header ${leftColor}-${rightColor} active-${activeColor}`}>
            <h1>{message}</h1>
        </div>
    );
}

DraftHeader.propTypes = {
    message: React.PropTypes.string,
    leftColor: React.PropTypes.string.isRequired,
    rightColor: React.PropTypes.string.isRequired,
    activeColor: React.PropTypes.string
}

export default DraftHeader;
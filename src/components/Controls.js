import React from 'react';
import PropTypes from 'prop-types';

import './Controls.css';

const Controls = ({ controls, history, future }) => {
    return (
        <div className="controls">
            <button className="controls-button" onClick={controls.switchSides}>
                <span>Switch Sides</span>
            </button>
            <button className="controls-button" onClick={controls.undo} disabled={history.length < 1}>
                <span>Undo</span>
            </button>
            <button className="controls-button" onClick={controls.redo} disabled={future.length < 1}>
                <span>Redo</span>
            </button>
            <button className="controls-button" onClick={controls.reset}>
                <span>Reset</span>
            </button>
        </div>
    );
}

Controls.propTypes = {
    controls: PropTypes.object.isRequired,
    history: PropTypes.array.isRequired,
    future: PropTypes.array.isRequired
}

export default Controls;

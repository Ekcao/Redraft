import React from 'react';
import './Controls.css';

const Controls = ({ controls, history, future }) => {
    return (
        <div className="controls">
            <button className="controls-button" onClick={controls.switchSides}>
                Switch Sides
            </button>
            <button className="controls-button" onClick={controls.undo} disabled={history.length < 1}>
                Undo
            </button>
            <button className="controls-button" onClick={controls.redo} disabled={future.length < 1}>
                Redo
            </button>
            <button className="controls-button" onClick={controls.reset}>
                Reset
            </button>
        </div>
    );
}

Controls.propTypes = {
    controls: React.PropTypes.object.isRequired,
    history: React.PropTypes.array.isRequired,
    future: React.PropTypes.array.isRequired
}

export default Controls;
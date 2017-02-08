import React from 'react';
import './Controls.css';

const Controls = ({ controls }) => {
    return (
        <div className="controls">
            <button className="controls-button" onClick={controls.switchSides}>Switch Sides</button>
            <button className="controls-button" onClick={controls.undo}>Undo</button>
            <button className="controls-button" onClick={controls.redo}>Redo</button>
        </div>
    );
}

Controls.propTypes = {
    controls: React.PropTypes.object.isRequired
}

export default Controls;
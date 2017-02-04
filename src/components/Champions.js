import React from 'react';

import ChampionGrid from './ChampionGrid';
import Controls from './Controls';
import './Champions.css';

const Champions = () => {
    return (
        <div className="champions">
            <ChampionGrid />
            <Controls />
        </div>
    );
}

export default Champions;
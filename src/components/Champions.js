import React from 'react';

import ChampionGrid from './ChampionGrid';
import Controls from './Controls';
import './Champions.css';

const Champions = ({ champions, onChampionClick }) => {
    return (
        <div className="champions">
            <ChampionGrid champions={champions} onChampionClick={onChampionClick}/>
            <Controls />
        </div>
    );
}

Champions.propTypes = {
    champions: React.PropTypes.object.isRequired
}

export default Champions;
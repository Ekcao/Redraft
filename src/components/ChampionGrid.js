import React from 'react';

import ChampionPortrait from './ChampionPortrait';

import './ChampionGrid.css';

const ChampionGrid = ({ champions, onChampionClick }) => {
    const listChampions = [];
    Object.keys(champions).forEach(key => {
        listChampions.push(
            <ChampionPortrait key={key} champion={champions[key]} onChampionClick={onChampionClick} />
        );
    });
    return (
        <div className="champion-grid">
            {listChampions}
        </div>
    );
}

ChampionGrid.propTypes = {
    champions: React.PropTypes.object.isRequired
}

export default ChampionGrid;
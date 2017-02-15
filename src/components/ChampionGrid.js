import React from 'react';

import ChampionSquare from './ChampionSquare';
import './ChampionGrid.css';

const ChampionGrid = ({ champions, onChampionClick, unavailableChampions }) => {
    const listChampions = [];
    Object.keys(champions).forEach(key => {
        const champ = champions[key];
        const unavailable = unavailableChampions.includes(key) ? 'unavailable' : 'available';
        listChampions.push(
            <div key={key} className={`champion-square-wrapper ${unavailable}`}>
                <ChampionSquare
                    name={champ.id}
                    imageURL={champ.portraitURL}
                    onClick={onChampionClick.bind(this, champions[key])} />
            </div>
        );
    });
    return (
        <div className="champion-grid">
            <div className="champion-grid-items">
                {listChampions}
            </div>
        </div>
    );
}

ChampionGrid.propTypes = {
    champions: React.PropTypes.object.isRequired,
    unavailableChampions: React.PropTypes.array.isRequired,
    onChampionClick: React.PropTypes.func
}

export default ChampionGrid;

import React from 'react';

import './ChampionGrid.css';

const ChampionGrid = ({ champions, onChampionClick, unavailableChampions }) => {
    const listChampions = [];
    Object.keys(champions).forEach(key => {
        const unavailable = unavailableChampions.includes(key) ? 'unavailable' : 'available';
        listChampions.push(
            <div key={key} className={`champion-portrait ${unavailable}`}>
                <img src={champions[key].portraitURL}
                    alt={champions[key].id}
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

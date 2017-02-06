import React from 'react';

import './ChampionGrid.css';

const ChampionGrid = ({ champions, onChampionClick }) => {
    const listChampions = [];
    Object.keys(champions).forEach(key => {
        listChampions.push(
            <img src={champions[key].portraitURL}
                key={key}    
                className="champion-portrait"
                alt={champions[key].id}
                onClick={onChampionClick.bind(this, key)}/>
        );
    });
    return (
        <div className="champion-grid">
            <div className="champion-grid-content">    
                {listChampions}
            </div>    
        </div>
    );
}

ChampionGrid.propTypes = {
    champions: React.PropTypes.object.isRequired,
    onChampionClick: React.PropTypes.func
}

export default ChampionGrid;
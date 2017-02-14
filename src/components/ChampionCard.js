import React from 'react';

import ChampionSquare from './ChampionSquare';
import './ChampionCard.css';

const ChampionCard = ({ name, imageURL }) => {
    return (
        <div className="champion-card">
            <ChampionSquare name={name} imageURL={imageURL} />
            <h3>{name}</h3>
        </div>
    );
}

export default ChampionCard;
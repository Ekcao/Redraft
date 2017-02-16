import React from 'react';

import ChampionSquare from './ChampionSquare';
import './BanPhaseInfo.css';

const BanPhaseInfo = ({ title, bans }) => {
    const banPhaseItems = bans.map((champ, index) => {
        if (champ) {
            return (
                <div className="champion-square-wrapper" key={champ.id}>
                    <ChampionSquare name={champ.id} imageURL={champ.portraitURL} />
                </div>
            );
        } else {
            return (
                <div className="champion-square-wrapper" key={index}>
                    <ChampionSquare />
                </div>
            );
        }
    });
    return (
        <div className="ban-phase-info">
            <h4>{title}</h4>
            <div className="ban-phase-items">
                {banPhaseItems}    
            </div>    
        </div>    
    );
}

export default BanPhaseInfo;
import React from 'react';
import ChampionSquare from './ChampionSquare';
import './TeamBans.css';

const TeamBans = ({ bans }) => {
    const banPortraits = bans.map(champ => {
        return (
            <div className="champion-ban" key={champ.id}>
                <ChampionSquare champ={champ} />    
            </div>    
        );
    });
    return (
        <div className="team-bans">
            {banPortraits}
        </div>
    );
}

TeamBans.propTypes = {
    bans: React.PropTypes.array.isRequired
}

export default TeamBans;
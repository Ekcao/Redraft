import React from 'react';

import ChampionSquare from './ChampionSquare';
import './TeamPicks.css';

const TeamPicks = ({ picks }) => {
    const pickPortraits = picks.map(champ => {
        return (
            <div className="champion-pick" key={champ.id}>
                <ChampionSquare champ={champ} />    
            </div>    
        );
    });
    return (
        <div className="team-picks">
            {pickPortraits}
        </div>
    );
}

TeamPicks.propTypes = {
    picks: React.PropTypes.array.isRequired
}

export default TeamPicks;
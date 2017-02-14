import React from 'react';

import ChampionCard from './ChampionCard';
import './TeamPicks.css';

const TeamPicks = ({ picks }) => {
    const pickPortraits = picks.map(champ => {
        return (
            <div className="champion-pick" key={champ.id}>
                <ChampionCard name={champ.name} imageURL={champ.portraitURL} />    
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
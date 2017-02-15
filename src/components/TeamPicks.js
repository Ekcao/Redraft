import React from 'react';

import ChampionCard from './ChampionCard';
import './TeamPicks.css';

const TeamPicks = ({ picks }) => {
    const pickPortraits = picks.map(champ => {
        return (
            <ChampionCard key={champ.id} name={champ.name} imageURL={champ.portraitURL} />    
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
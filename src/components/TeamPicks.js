import React from 'react';
import './TeamPicks.css';

const TeamPicks = ({ picks }) => {
    const pickPortraits = picks.map(champ => {
        return (
            <img src={champ.portraitURL}
                key={champ.id}
                className="champion-pick"
                alt={champ.id} />
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
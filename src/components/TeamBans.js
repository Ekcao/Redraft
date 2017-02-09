import React from 'react';
import './TeamBans.css';

const TeamBans = ({ bans }) => {
    const banPortraits = bans.map(champ => {
        return (
            <img src={champ.portraitURL}
                key={champ.id}
                className="champion-ban"
                alt={champ.id}
            />
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
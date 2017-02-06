import React from 'react';
import './TeamBans.css';

const TeamBans = ({ bans }) => {
    return (
        <div className="team-bans">
            Team Bans    
        </div>
    );
}

TeamBans.propTypes = {
    bans: React.PropTypes.array.isRequired
}

export default TeamBans;
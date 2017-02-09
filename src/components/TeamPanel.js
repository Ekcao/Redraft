import React from 'react';

import TeamPicks from './TeamPicks';
import TeamBans from './TeamBans';

import './TeamPanel.css';

const TeamPanel = ({ color, side, team }) => {
    return (
        <div className={`team-panel ${color} ${side}`}>
            <TeamPicks picks={team.picks} />
            <TeamBans bans={team.bans} />
        </div>
    );
}

TeamPanel.propTypes = {
    color: React.PropTypes.string.isRequired,
    side: React.PropTypes.string.isRequired,
    team: React.PropTypes.object.isRequired
}

export default TeamPanel;
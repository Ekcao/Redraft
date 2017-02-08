import React from 'react';

import TeamPicks from './TeamPicks';
import TeamBans from './TeamBans';

import './TeamPanel.css';

const TeamPanel = ({ side, team }) => {
    return (
        <div className={`team-panel ${side}`}>
            <TeamPicks picks={team.picks}/>
            <TeamBans bans={team.bans}/>
        </div>
    );
}

TeamPanel.propTypes = {
    side: React.PropTypes.string.isRequired,
    team: React.PropTypes.object.isRequired
}

export default TeamPanel;
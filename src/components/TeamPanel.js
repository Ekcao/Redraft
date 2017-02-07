import React from 'react';

import TeamPicks from './TeamPicks';
import TeamBans from './TeamBans';

import './TeamPanel.css';

import { Team } from '../league/team';

const TeamPanel = ({ team }) => {
    return (
        <div className={`team-panel ${team.side}`}>
            <TeamPicks picks={team.picks}/>
            <TeamBans bans={team.bans}/>
        </div>
    );
}

TeamPanel.propTypes = {
    team: React.PropTypes.instanceOf(Team).isRequired
}

export default TeamPanel;
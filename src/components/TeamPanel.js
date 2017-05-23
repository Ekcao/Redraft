import React from 'react';
import PropTypes from 'prop-types';

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
    color: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    team: PropTypes.object.isRequired
}

export default TeamPanel;
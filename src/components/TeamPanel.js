import React from 'react';

import TeamPicks from './TeamPicks';
import TeamBans from './TeamBans';
import './TeamPanel.css';

const TeamPanel = ({ side }) => {
    return (
        <div className={`team-panel ${side}`}>
            <TeamPicks />
            <TeamBans />
        </div>
    );
}

export default TeamPanel;
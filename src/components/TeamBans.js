import React from 'react';

import BanPhaseInfo from './BanPhaseInfo';
import { NUM_BANS_PHASE_ONE } from '../util/constants';
import './TeamBans.css';

const TeamBans = ({ bans }) => {
    return (
        <div className="team-bans">
            <h3>Bans</h3>
            <BanPhaseInfo title="Phase 1" bans={bans.slice(0, NUM_BANS_PHASE_ONE)} />   
            <BanPhaseInfo title="Phase 2" bans={bans.slice(NUM_BANS_PHASE_ONE)} />   
        </div>
    );
};

TeamBans.propTypes = {
    bans: React.PropTypes.array.isRequired
};

export default TeamBans;
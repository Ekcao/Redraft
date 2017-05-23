import React from 'react';
import PropTypes from 'prop-types';

import ChampionCard from './ChampionCard';
import './TeamPicks.css';

const TeamPicks = ({ picks }) => {
    const pickPortraits = picks.map((champ, index) => {
        if (champ) {
            return (
                <ChampionCard key={champ.id} name={champ.name} imageURL={champ.portraitURL} />
            );
        } else {
            return (
                <ChampionCard key={index} />
            );
        }
    });
    return (
        <div className="team-picks">
            {pickPortraits}
        </div>
    );
}

TeamPicks.propTypes = {
    picks: PropTypes.array.isRequired
}

export default TeamPicks;
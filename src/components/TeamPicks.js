import React from 'react';
import PropTypes from 'prop-types';

import ChampionCard from './ChampionCard';
import '../styles/TeamPicks.css';

const TeamPicks = ({ picks, pickTurns }) => {
    const pickItems = picks.map((champ, index) => {
        if (champ) {
            return (
				<div className="pick-item" key={index}>
					<span>{pickTurns[index]}</span>
					<ChampionCard key={champ.id} name={champ.name} imageURL={champ.portraitURL} />
				</div>
            );
        } else {
            return (
				<div className="pick-item" key={index}>
					<span>{pickTurns[index]}</span>
					<ChampionCard />
				</div>
            );
        }
    });
    return (
        <div className="team-picks">
            {pickItems}
        </div>
    );
}

TeamPicks.propTypes = {
    picks: PropTypes.array.isRequired,
	pickTurns: PropTypes.array.isRequired
}

export default TeamPicks;

import React from 'react';
import PropTypes from 'prop-types';

import ChampionSquare from './ChampionSquare';
import './ChampionCard.css';

const ChampionCard = ({ name, imageURL }) => {
    return (
        <div className="champion-card">
			<ChampionSquare name={name} imageURL={imageURL} />
            <h3>{name}</h3>
        </div>
    );
};

ChampionCard.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string
}

export default ChampionCard;

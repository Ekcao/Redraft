import React from 'react';
import PropTypes from 'prop-types';

import ChampionSquare from './ChampionSquare';
import '../styles/ChampionPick.css';

const ChampionPick = ({ name, imageURL }) => {
    return (
        <div className="champion-pick">
			<ChampionSquare name={name} imageURL={imageURL} />
            <h3>{name}</h3>
        </div>
    );
};

ChampionPick.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string
}

export default ChampionPick;

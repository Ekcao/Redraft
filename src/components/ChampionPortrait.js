import React from 'react';

import './ChampionPortrait.css';

const ChampionPortrait = ({ champion, onChampionClick }) => {
    return (
        <img src={champion.portraitURL}
            className="champion-portrait"
            alt={champion.id}
            onClick={onChampionClick} />
    );
}

ChampionPortrait.propTypes = {
    champion: React.PropTypes.object.isRequired
}

export default ChampionPortrait;
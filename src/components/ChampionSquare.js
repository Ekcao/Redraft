import React from 'react';

import './ChampionSquare.css';

const ChampionSquare = ({ champ, onClick }) => {
    let content;
    if (champ.portraitURL) {
        content = (
            <img src={champ.portraitURL}
                className="champion-img"
                onClick={onClick}
                alt={champ.id} />
        );
    } else {
        content = (
            <div className="champion-placeholder" />
        );
    }

    return (
        <div className="champion-square">
            { content }
        </div>
    );
}

ChampionSquare.propTypes = {
    champ: React.PropTypes.object,
    onClick: React.PropTypes.func
};

ChampionSquare.defaultProps = {
    champ: {
        id: 'placeholder'
    }
};

export default ChampionSquare;
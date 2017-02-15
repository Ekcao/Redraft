import React from 'react';

import './ChampionSquare.css';

const ChampionSquare = ({ name, imageURL, onClick }) => {
    const clickable = (onClick) ? 'clickable' : 'unclickable';
    return (
        <div className={`champion-square ${clickable}`}>
            <img src={imageURL}
                className="champion-img"
                onClick={onClick}
                alt={name} />
        </div>
    );
}

ChampionSquare.propTypes = {
    name: React.PropTypes.string,
    imageURL: React.PropTypes.string,
    onClick: React.PropTypes.func
};

ChampionSquare.defaultProps = {
    name: 'Placeholder',
    imageURL: '',
    // onClick: () => {}
};

export default ChampionSquare;
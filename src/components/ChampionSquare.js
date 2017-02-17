import React from 'react';

import './ChampionSquare.css';

const ChampionSquare = ({ name, imageURL, onClick }) => {
    const clickable = (onClick) ? 'clickable' : 'unclickable';
    let content;
    if (imageURL) {
        content = <img src={imageURL} className="champion-img" onClick={onClick} alt={name} />;
    } else {
        content = <div className="champion-img empty" />;
    }
    
    return (
        <div className={`champion-square ${clickable}`}>
            {content}
        </div>
    );
}

ChampionSquare.propTypes = {
    name: React.PropTypes.string,
    imageURL: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default ChampionSquare;
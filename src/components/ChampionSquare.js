import React from 'react';
import PropTypes from 'prop-types';

import EmptySquare from '../images/gray_square.png';
import './ChampionSquare.css';

const ChampionSquare = ({ name, imageURL, onClick }) => {
    const clickable = (onClick) ? 'clickable' : 'unclickable';
    let content;
    if (imageURL) {
        content = <img src={imageURL} className="champion-img" onClick={onClick} alt={name} />;
    } else {
        content = <img src={EmptySquare} className="champion-img empty" alt="Empty"/>;
    }

    return (
        <div className={`champion-square ${clickable}`}>
            {content}
        </div>
    );
}

ChampionSquare.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string,
    onClick: PropTypes.func
};

export default ChampionSquare;

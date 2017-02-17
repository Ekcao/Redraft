import React, { Component } from 'react';

import ChampionSquare from './ChampionSquare';
import './ChampionGrid.css';

class ChampionGrid extends Component {

    championSquaresList = () => {
        const { champions, onChampionClick, unavailableChampions } = this.props;

        return champions.map(champ => {
            const unavailable = unavailableChampions.includes(champ.id) ? 'unavailable' : 'available';
            return (
                <div key={champ.id} className={`champion-square-wrapper ${unavailable}`}>
                    <ChampionSquare
                        name={champ.id}
                        imageURL={champ.portraitURL}
                        onClick={onChampionClick.bind(this, champ)} />
                </div>
            );
        });
    }    

    render() {
        const listChampions = this.championSquaresList();
        return (
            <div className="champion-grid">
                <div className="filter-container">
                    <input type="text" name="filter" />
                </div>
                <div className="champion-grid-items">
                    {listChampions}
                </div>
            </div>
        );
    }
}

ChampionGrid.propTypes = {
    champions: React.PropTypes.array.isRequired,
    unavailableChampions: React.PropTypes.array.isRequired,
    onChampionClick: React.PropTypes.func
}

export default ChampionGrid;

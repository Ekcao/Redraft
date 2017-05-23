import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChampionSquare from './ChampionSquare';
import MageIcon from '../images/role_icon_mage.png';
import './ChampionGrid.css';

class ChampionGrid extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            filteredChampions: []
        });

        this.championSquaresList = this.championSquaresList.bind(this);
        this.filterByNameOrTag = this.filterByNameOrTag.bind(this);
        this.filterByTag = this.filterByTag.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // Set default filtered data to all champions
        if (this.props.champions.length !== nextProps.champions.length) {
            this.setState({
                filteredChampions: nextProps.champions
            });
        }
    }

    championSquaresList() {
        const { onChampionClick, unavailableChampions } = this.props;
        const { filteredChampions } = this.state;

        return filteredChampions.map(champ => {
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

    filterByNameOrTag(event) {
        const filterRegex = new RegExp(event.target.value, 'i');
        const filteredChampions = this.props.champions.filter(champ => {
            return filterRegex.test(champ.id) || this.filterByTag(champ.tags, filterRegex).length > 0;
        });

        this.setState({
            filteredChampions: filteredChampions
        });
    }

    filterByTag(tags, filterRegex) {
        return tags.filter(tag => {
            return filterRegex.test(tag);
        });
    }

    render() {
        const championSquaresList = this.championSquaresList();
        return (
            <div className="champion-grid">
                <div className="filter-container">
                    <div className="filter-role">
                        <img src={MageIcon} alt="MageIcon" />  
                        <img src={MageIcon} alt="MageIcon" />
                        <img src={MageIcon} alt="MageIcon" />
                        <img src={MageIcon} alt="MageIcon" />
                    </div>    
                    <input type="text" name="filter" onChange={this.filterByNameOrTag} placeholder="Filter" />
                </div>
                <div className="champion-grid-items">
                    {championSquaresList}
                </div>
            </div>
        );
    }
}

ChampionGrid.propTypes = {
    champions: PropTypes.array.isRequired,
    unavailableChampions: PropTypes.array.isRequired,
    onChampionClick: PropTypes.func
}

export default ChampionGrid;

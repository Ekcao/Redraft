import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChampionSquare from './ChampionSquare';
import AssassinIcon from '../images/role_icon_assassin.png';
import FighterIcon from '../images/role_icon_fighter.png';
import MageIcon from '../images/role_icon_mage.png';
import MarksmanIcon from '../images/role_icon_marksman.png';
import SupportIcon from '../images/role_icon_support.png';
import TankIcon from '../images/role_icon_tank.png';
import '../styles/ChampionGrid.css';

class ChampionGrid extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            filteredChampions: [],
			activeRoleFilter: "",
        });

        this.championSquaresList = this.championSquaresList.bind(this);
        this.filterByNameOrTag = this.filterByNameOrTag.bind(this);
		this.filterByRole = this.filterByRole.bind(this);
        this.searchTags = this.searchTags.bind(this);
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
            return filterRegex.test(champ.id) || this.searchTags(champ.tags, filterRegex).length > 0;
        });

        this.setState({
            filteredChampions: filteredChampions
        });
    }

    searchTags(tags, filterRegex) {
        return tags.filter(tag => {
            return filterRegex.test(tag);
        });
    }

	filterByRole(role, event) {
		if (this.state.activeRoleFilter === role) {
			event.target.blur();
			this.setState({
				filteredChampions: this.props.champions
			});
			return;
		}

		const filterRegex = new RegExp(role, 'i');
		const filteredChampions = this.props.champions.filter(champ => {
			return this.searchTags(champ.tags, filterRegex).length > 0;
		});

		this.setState({
            filteredChampions: filteredChampions,
			activeRoleFilter: role
        });
	}

    render() {
        return (
            <div className="champion-grid">
                <div className="filter-container">
					<div className="filter-roles">
						<input className="filter-role-icon" type="image" src={AssassinIcon} name="assassin-role" onClick={this.filterByRole.bind(this, "Assassin")} alt="Assassin"/>
						<input className="filter-role-icon" type="image" src={FighterIcon} name="fighter-role" onClick={this.filterByRole.bind(this, "Fighter")} alt="Fighter"/>
						<input className="filter-role-icon" type="image" src={MageIcon} name="mage-role" onClick={this.filterByRole.bind(this, "Mage")} alt="Mage"/>
						<input className="filter-role-icon" type="image" src={MarksmanIcon} name="marksman-role" onClick={this.filterByRole.bind(this, "Marksman")} alt="Marksman"/>
						<input className="filter-role-icon" type="image" src={SupportIcon} name="support-role" onClick={this.filterByRole.bind(this, "Support")} alt="Support"/>
						<input className="filter-role-icon" type="image" src={TankIcon} name="tank-role" onClick={this.filterByRole.bind(this, "Tank")} alt="Tank"/>
					</div>
                    <input className="filter-input" type="text" name="filter" onChange={this.filterByNameOrTag} placeholder="Search" />
                </div>
                <div className="champion-grid-items">
                    {this.championSquaresList()}
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

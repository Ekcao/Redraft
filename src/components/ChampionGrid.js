import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChampionSquare from './ChampionSquare';
import Header from './Header';
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
        });

		this.activeRoleIcon = null;
        this.championSquaresList = this.championSquaresList.bind(this);
        this.filterChampions = this.filterChampions.bind(this);
		this.handleRoleIconClick = this.handleRoleIconClick.bind(this);
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

    filterChampions(event) {
        const filterRegex = new RegExp(event.target.value, 'i');

		let filteredChampions;
		if (this.activeRoleIcon) {
			const roleFilterRegex = new RegExp(this.activeRoleIcon.alt, 'i');
			filteredChampions = this.filterByNameAndRole(filterRegex, roleFilterRegex);
		} else {
			filteredChampions = this.filterByNameOrRole(filterRegex);
		}

        this.setState({
            filteredChampions: filteredChampions
        });
    }

	filterByNameOrRole(filterRegex) {
		return this.props.champions.filter(champ => {
			return filterRegex.test(champ.id) || this.hasRole(champ, filterRegex);
		});
	}

	filterByNameAndRole(nameFilterRegex, roleFilterRegex) {
		return this.props.champions.filter(champ => {
			return nameFilterRegex.test(champ.id) && this.hasRole(champ, roleFilterRegex);
		});
	}

    filterRoles(roles, filterRegex) {
        return roles.filter(role => {
            return filterRegex.test(role);
        });
    }

	hasRole(champ, roleFilterRegex) {
		return this.filterRoles(champ.tags, roleFilterRegex).length > 0;
	}

	handleRoleIconClick(role, event) {
		let icon = event.target;
		if (icon.classList.contains("active")) {
			icon.classList.remove("active");
			this.activeRoleIcon = null;
			this.setState({
				filteredChampions: this.props.champions,
			});
			return;
		}

		if (this.activeRoleIcon) this.activeRoleIcon.classList.remove("active");
		icon.classList.add("active");
		this.activeRoleIcon = icon;

		const filterRegex = new RegExp(role, 'i');
		const filteredChampions = this.props.champions.filter(champ => {
			return this.hasRole(champ, filterRegex);
		});

		this.setState({
            filteredChampions: filteredChampions
        });
	}

    render() {
        return (
            <div className="champion-grid">
                <Header className="filter-container">
					<div className="filter-roles">
						<img className="filter-role-icon" src={AssassinIcon} name="Assassin" onClick={this.handleRoleIconClick.bind(this, "Assassin")} alt="Assassin"/>
						<img className="filter-role-icon" src={FighterIcon} name="Fighter" onClick={this.handleRoleIconClick.bind(this, "Fighter")} alt="Fighter"/>
						<img className="filter-role-icon" src={MageIcon} name="Mage" onClick={this.handleRoleIconClick.bind(this, "Mage")} alt="Mage"/>
						<img className="filter-role-icon" src={MarksmanIcon} name="Marksman" onClick={this.handleRoleIconClick.bind(this, "Marksman")} alt="Marksman"/>
						<img className="filter-role-icon" src={SupportIcon} name="Support" onClick={this.handleRoleIconClick.bind(this, "Support")} alt="Support"/>
						<img className="filter-role-icon" src={TankIcon} name="Tank" onClick={this.handleRoleIconClick.bind(this, "Tank")} alt="Tank"/>
					</div>
                    <input className="filter-input" type="search" name="filter" onChange={this.filterChampions} placeholder="FIND A CHAMPION" />
                </Header>
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

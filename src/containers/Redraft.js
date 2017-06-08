import React, { Component } from 'react';

import DraftHeader from '../components/DraftHeader';
import ChampionGrid from '../components/ChampionGrid';
import Controls from '../components/Controls';
import TeamPanel from '../components/TeamPanel';
import '../styles/Redraft.css';

import Riot from '../league/riot';
import { sides, phaseOrder, createNewTeams } from '../league/pickban';
import { replaceFirstNullWith } from '../util/arrays';

class Redraft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            champions: [],
            // Instead of having to copy champions each pick
            unavailableChampions: [],
            teams: createNewTeams(),
            currentStep: 0,
			leftSideColor: sides.BLUE,
			rightSideColor: sides.RED,
            history: [],
            future: []
        };

        this.handleChampionClick = this.handleChampionClick.bind(this);
        this.controls.switchSides = this.controls.switchSides.bind(this);
        this.controls.undo = this.controls.undo.bind(this);
        this.controls.redo = this.controls.redo.bind(this);
        this.controls.reset = this.controls.reset.bind(this);
    }

    componentDidMount() {
        Riot.getChampions()
            .then(response => {
                const championsObj = response.data.data;
                const championsArray = Object.keys(championsObj).map(key => {
                    championsObj[key].portraitURL = Riot.getPortraitURL(response.data.version, championsObj[key]);
                    return championsObj[key];
                });

                this.setState({
                    champions: championsArray
                });
            });
    }

    handleChampionClick(champ) {
		const { currentStep } = this.state;
        if (currentStep >= phaseOrder.length) return;
        if (this.state.unavailableChampions.includes(champ.id)) return;

        const step = phaseOrder[currentStep];
        const teams = Object.assign({}, JSON.parse(JSON.stringify(this.state.teams)));

		teams[step.side][step.phase + 's'] = replaceFirstNullWith(teams[step.side][step.phase + 's'], champ);

        this.setState({
            history: this.state.history.concat(this.state),
            teams: teams,
            unavailableChampions: this.state.unavailableChampions.concat(champ.id),
            currentStep: currentStep + 1
        });
    }

    controls = {
        switchSides: function () {
            this.setState({
                teams: createNewTeams(),
                currentStep: 0,
				leftSideColor: this.state.rightSideColor,
				rightSideColor: this.state.leftSideColor,
                history: [],
                future: [],
                unavailableChampions: []
            });
        },

        undo: function () {
            if (this.state.history.length < 1) return;

            const prevState = this.state.history.slice(-1)[0];
            this.setState({
                future: this.state.future.concat(this.state),
                history: this.state.history.slice(0, -1),
                teams: prevState.teams,
                unavailableChampions: prevState.unavailableChampions,
                currentStep: this.state.currentStep - 1
            });
        },

        redo: function () {
            if (this.state.future.length < 1) return;

            const newState = this.state.future.slice(-1)[0];
            this.setState({
                history: this.state.history.concat(this.state),
                future: this.state.future.slice(0, -1),
                teams: newState.teams,
                unavailableChampions: newState.unavailableChampions,
                currentStep: this.state.currentStep + 1
            });
        },

        reset: function () {
            this.setState({
                teams: createNewTeams(),
                currentStep: 0,
				leftSideColor: sides.BLUE,
				rightSideColor: sides.RED,
                history: [],
                future: [],
                unavailableChampions: []
            });
        }
    }

    activeStep = () => {
        const { currentStep } = this.state;
        if (currentStep < phaseOrder.length) {
            return `${phaseOrder[currentStep].side} SIDE ${phaseOrder[currentStep].phase}`.toUpperCase();
        } else {
            return 'READY';
        }
    }

    activeColor = () => {
        const { currentStep } = this.state;
        if (currentStep < phaseOrder.length) {
            return phaseOrder[currentStep].side;
        } else {
            return '';
        }
    }

    render() {
        const {
			champions,
			teams,
			history,
			future,
			leftSideColor,
			rightSideColor,
			unavailableChampions
		} = this.state;

        return (
            <div className="redraft">
                <DraftHeader message={this.activeStep()} leftColor={leftSideColor} rightColor={rightSideColor} activeColor={this.activeColor()} />
				<TeamPanel color={leftSideColor} side="left" team={teams[leftSideColor]} />
				<ChampionGrid
					champions={champions}
					unavailableChampions={unavailableChampions}
					onChampionClick={this.handleChampionClick} />
				<Controls controls={this.controls} history={history} future={future} />
				<TeamPanel color={rightSideColor} side="right" team={teams[rightSideColor]} />
            </div>
        );
    }
}

export default Redraft;

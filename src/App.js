import React, { Component } from 'react';

import Header from './components/Header';
import ChampionGrid from './components/ChampionGrid';
import Controls from './components/Controls';
import TeamPanel from './components/TeamPanel';
import './App.css';

import Riot from './league/riot';
import { sides, phases, phaseOrder } from './league/phases';
import { newTeams } from './league/util';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: {},
            // Instead of having to copy champions each pick
            unavailableChampions: [],
            teams: newTeams(),
            currentStep: 0,
            isBlueOnLeft: true,
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
                const champions = response.data.data;
                Object.keys(champions).forEach(key => {
                    champions[key].portraitURL = Riot.getPortraitURL(response.data.version, champions[key]);
                });
                this.setState({ champions });
            });
    }

    handleChampionClick(champ) {
        // All picks and bans are done.
        if (this.state.currentStep >= phaseOrder.length) return;
        // This pick is 'disabled'
        if (this.state.unavailableChampions.includes(champ.id)) return;

        const step = phaseOrder[this.state.currentStep];
        // Make a copy of the current teams
        const teams = Object.assign({}, JSON.parse(JSON.stringify(this.state.teams)));

        if (step.phase === phases.BAN) {
            teams[step.side].bans.push(champ);
        } else {
            teams[step.side].picks.push(champ);
        }

        this.setState({
            history: this.state.history.concat(this.state),
            teams: teams,
            unavailableChampions: this.state.unavailableChampions.concat(champ.id),
            currentStep: this.state.currentStep + 1
        });
    }

    controls = {
        switchSides: function() {
            this.setState({
                teams: newTeams(),
                currentStep: 0,
                isBlueOnLeft: !this.state.isBlueOnLeft,
                history: [],
                future: [],
                unavailableChampions: []
            });
        },

        undo: function() {
            if (this.state.history.length < 1) return;

            const prevState = this.state.history.pop();

            this.setState({
                future: this.state.future.concat(this.state),
                teams: prevState.teams,
                unavailableChampions: prevState.unavailableChampions,
                currentStep: this.state.currentStep - 1
            });
        },

        redo: function() {
            if (this.state.future.length < 1) return;

            const newState = this.state.future.pop();

            this.setState({
                history: this.state.history.concat(this.state),
                teams: newState.teams,
                unavailableChampions: newState.unavailableChampions,
                currentStep: this.state.currentStep + 1
            });
        },

        reset: function() {
            this.setState({
                teams: newTeams(),
                currentStep: 0,
                isBlueOnLeft: true,
                history: [],
                future: [],
                unavailableChampions: []
            });
        }
    }

    headerMessage = () => {
        const { currentStep } = this.state;
        if (currentStep < phaseOrder.length) {
            return `${phaseOrder[currentStep].phase} ${phaseOrder[currentStep].side}`.toUpperCase();
        } else {
            return '';
        }
    }

    render() {
        const { champions, teams, history, future, isBlueOnLeft, unavailableChampions } = this.state;
        const leftSide = (isBlueOnLeft) ? sides.BLUE : sides.RED;
        const rightSide = (isBlueOnLeft) ? sides.RED : sides.BLUE;
        return (
            <div className="app">
                <Header message={this.headerMessage()}/>
                <div className="app-content">
                    <TeamPanel color={leftSide} side="left" team={teams[leftSide]} />
                    <div className="center-content">
                        <ChampionGrid
                            champions={champions}
                            unavailableChampions={unavailableChampions}
                            onChampionClick={this.handleChampionClick} />
                        <Controls controls={this.controls} history={history} future={future} />
                    </div>
                    <TeamPanel color={rightSide} side="right" team={teams[rightSide]} />
                </div>
            </div>
        );
    }
}

export default App;

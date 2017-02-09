import React, { Component } from 'react';

import Header from './components/Header';
import ChampionGrid from './components/ChampionGrid';
import Controls from './components/Controls';
import TeamPanel from './components/TeamPanel';
import './App.css';

import Riot from './league/riot';
import { sides, phases, phaseOrder } from './league/phases';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: {},
            teams: {
                [sides.BLUE]: { name: 'BLUE', picks: [], bans: [] },
                [sides.RED]: { name: 'RED', picks: [], bans: [] }
            },
            currentStep: 0,
            isBlueOnLeft: true,
            history: [],
            future: []
        };
    }

    componentDidMount() {
        Riot.getChampions()
            .then(response => {
                const champions = response.data.data;
                Object.keys(champions).forEach(key => {
                    // Add an 'available'' field to keep track of pick/ban status.
                    champions[key]['available'] = true;
                    champions[key]['portraitURL'] = Riot.getPortraitURL(response.data.version, champions[key]);
                });
                this.setState({ champions });
            });
    }

    handleChampionClick = (champ) => {
        if (this.state.currentStep >= phaseOrder.length) return;

        const step = phaseOrder[this.state.currentStep];
        const teams = Object.assign({}, JSON.parse(JSON.stringify(this.state.teams)));

        if (step.phase === phases.BAN) {
            teams[step.side].bans.push(champ);
        } else {
            teams[step.side].picks.push(champ);
        }

        this.setState({
            history: this.state.history.concat(this.state.teams),
            teams: teams,
            currentStep: this.state.currentStep + 1
        });
    }

    controls = {
        switchSides: () => {
            this.setState({
                teams: {
                    [sides.BLUE]: { name: 'BLUE', picks: [], bans: [] },
                    [sides.RED]: { name: 'RED', picks: [], bans: [] }
                },
                currentStep: 0,
                isBlueOnLeft: !this.state.isBlueOnLeft,
                history: [],
                future: []
            });
        },

        undo: () => {
            if (this.state.history.length < 1) return;

            this.setState({
                future: this.state.future.concat(this.state.teams),
                teams: this.state.history.pop(),
                currentStep: this.state.currentStep - 1
            });
        },

        redo: () => {
            if (this.state.future.length < 1) return;

            this.setState({
                history: this.state.history.concat(this.state.teams),
                teams: this.state.future.pop(),
                currentStep: this.state.currentStep + 1
            });
        },

        reset: () => {
            this.setState({
                teams: {
                    [sides.BLUE]: { name: 'BLUE', picks: [], bans: [] },
                    [sides.RED]: { name: 'RED', picks: [], bans: [] }
                },
                currentStep: 0,
                isBlueOnLeft: true,
                history: [],
                future: []
            });
        }
    }

    render() {
        const { champions, teams, history, future, isBlueOnLeft } = this.state;
        const leftSide = (isBlueOnLeft) ? sides.BLUE : sides.RED;
        const rightSide = (isBlueOnLeft) ? sides.RED : sides.BLUE;
        return (
            <div className="app">
                <Header />
                <div className="app-content">
                    <TeamPanel color={leftSide} side="left" team={teams[leftSide]} />
                    <div className="center-content">
                        <ChampionGrid champions={champions} onChampionClick={this.handleChampionClick} />
                        <Controls controls={this.controls} history={history} future={future}/>
                    </div>
                    <TeamPanel color={rightSide} side="right" team={teams[rightSide]} />
                </div>
            </div>
        );
    }
}

export default App;

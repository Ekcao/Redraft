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
                    champions[key]['portraitURL'] = Riot.getPortraitURL(champions[key]);
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
            console.log('Switch Sides');
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
        }
    }

    render() {
        const { champions, teams } = this.state;
        return (
            <div className="app">
                <Header />    
                <div className="app-content">
                    <TeamPanel side={sides.BLUE} team={teams[sides.BLUE]}/>
                    <div className="center-content">
                        <ChampionGrid champions={champions} onChampionClick={this.handleChampionClick} />
                        <Controls controls={this.controls}/>
                    </div>
                    <TeamPanel side={sides.RED} team={teams[sides.RED]}/>
                </div>
            </div>
        );
    }
}

export default App;

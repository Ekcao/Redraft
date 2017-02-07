import React, { Component } from 'react';

import Header from './components/Header';
import ChampionGrid from './components/ChampionGrid';
import Controls from './components/Controls';
import TeamPanel from './components/TeamPanel';
import './App.css';

import Riot from './league/riot';
import Team from './league/team';
import { sides, phases, phaseOrder } from './league/phases';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: {},
            teams: {
                [sides.BLUE]: new Team('CLG', sides.BLUE),
                [sides.RED]: new Team('TSM', sides.RED)
            },
            currentStep: 0
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
        const step = phaseOrder[this.state.currentStep];
        const teams = this.state.teams;

        console.log(step);        
        if (step.phase === phases.BAN) {
            teams[step.side].bans.push(champ);
        } else {
            teams[step.side].picks.push(champ);
        }
        
        this.setState({
            teams: teams,
            currentStep: this.state.currentStep + 1
        });
    }

    render() {
        const { champions, teams } = this.state;
        return (
            <div className="app">
                <Header />    
                <div className="app-content">
                    <TeamPanel team={teams[sides.BLUE]}/>
                    <div className="center-content">
                        <ChampionGrid champions={champions} onChampionClick={this.handleChampionClick} />
                        <Controls />
                    </div>
                    <TeamPanel team={teams[sides.RED]}/>
                </div>
            </div>
        );
    }
}

export default App;

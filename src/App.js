import React, { Component } from 'react';

import Header from './components/Header';
import ChampionGrid from './components/ChampionGrid';
import Controls from './components/Controls';
import TeamPanel from './components/TeamPanel';
import './App.css';

import League from './league';
import Team from './team';

class App extends Component {
    side = {
        BLUE: 'blue',
        RED: 'red'
    }

    constructor(props) {
        super(props);
        this.state = {
            champions: {},
            blueTeam: new Team('CLG', this.side.BLUE),
            redTeam: new Team('TSM', this.side.RED)
        };
    }

    componentDidMount() {
        League.getChampions()
            .then(response => {
                const champions = response.data.data;
                Object.keys(champions).forEach(key => {
                    // Add an 'available'' field to keep track of pick/ban status.
                    champions[key]['available'] = true;
                    champions[key]['portraitURL'] = League.getPortraitURL(champions[key]);
                });
                this.setState({ champions });
            });
    }

    handleChampionClick = (e) => {
        const team = this.state.redTeam;
        team.picks = team.picks.concat(e);
        this.setState({
            redTeam: team
        });
    }

    render() {
        const { champions, blueTeam, redTeam } = this.state;
        return (
            <div className="app">
                <Header />    
                <div className="app-content">
                    <TeamPanel team={blueTeam}/>
                    <div className="center-content">
                        <ChampionGrid champions={champions} onChampionClick={this.handleChampionClick} />
                        <Controls />
                    </div>
                    <TeamPanel team={redTeam}/>
                </div>
            </div>
        );
    }
}

export default App;

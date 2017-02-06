import React, { Component } from 'react';

import Header from './components/Header';
import ChampionGrid from './components/ChampionGrid';
import Controls from './components/Controls';
import TeamPanel from './components/TeamPanel';
import './App.css';

import League from './league';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            champions: {}
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
        console.log(e);
    }

    render() {
        const { champions } = this.state;
        return (
            <div className="app">
                <Header />    
                <div className="app-content">
                    <TeamPanel side="blue"/>
                    <div className="center-content">
                        <ChampionGrid champions={champions} onChampionClick={this.handleChampionClick} />
                        <Controls />
                    </div>
                    <TeamPanel side="red"/>
                </div>
            </div>
        );
    }
}

export default App;

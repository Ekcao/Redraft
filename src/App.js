import React, { Component } from 'react';

import Header from './components/Header';
import Champions from './components/Champions';
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
                // Add an 'available'' field to keep track of pick/ban status.
                Object.keys(champions).forEach(key => {
                    champions[key]['available'] = true;
                    champions[key]['portraitURL'] = League.getPortraitURL(champions[key]);
                });
                this.setState({ champions });
            });
    }

    handleChampionClick = (e) => {
        console.log(e.target);
    }

    render() {
        const { champions } = this.state;
        return (
            <div className="app">
                <Header />    
                <div className="app-content">
                    <TeamPanel side="blue"/>
                    <Champions champions={champions} onChampionClick={this.handleChampionClick}/>
                    <TeamPanel side="red"/>
                </div>
            </div>
        );
    }
}

export default App;

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
            champions: ''
        };
    }

    componentDidMount() {
        League.getChampions()
            .then(response => {
                const champions = response.data.data;
                this.setState({ champions });
            });
    }

    render() {
        League.getChampions();
        return (
            <div className="app">
                <Header />    
                <div className="app-content">
                    <TeamPanel side="blue"/>
                    <Champions />
                    <TeamPanel side="red"/>
                </div>
            </div>
        );
    }
}

export default App;

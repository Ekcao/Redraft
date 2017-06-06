import React from 'react';
import { TitleBar } from 'react-desktop/windows';

import Redraft from './Redraft';
import '../styles/App.css';

import Electron from '../electron-remote';

const App = () => {
    return (
        <div className="app">
            <TitleBar
                className="title-bar"
                controls
                background="#121212"
                theme="dark"
                onCloseClick={Electron.close}
                onMinimizeClick={Electron.minimize}
                onMaximizeClick={Electron.toggleMaximize}
				onRestoreDownClick={Electron.toggleMaximize} />
            <Redraft />
        </div>
    );
}

export default App;

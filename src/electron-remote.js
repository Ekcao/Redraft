const remote = window.require('electron').remote;

const Electron = {
    close: () => {
        remote.getCurrentWindow().close();
    },

    minimize: () => {
        remote.getCurrentWindow().minimize();
    },

    maximize: () => {
        remote.getCurrentWindow().maximize();
    },

    toggleMaximize: () => {
        const currentWindow = remote.getCurrentWindow();
        if (currentWindow.isMaximized()) {
            currentWindow.unmaximize();
        } else {
            currentWindow.maximize();
        }
    }
};

export default Electron;

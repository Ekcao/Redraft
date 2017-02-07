const side = {
    BLUE: 'blue',
    RED: 'red'
}

class Team {
    constructor(name, side) {
        this.name = name;
        this.side = side;
        this.picks = [];
        this.bans = [];
    }
}

export { side, Team };
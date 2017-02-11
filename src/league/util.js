import { sides } from './phases';

function newTeams() {
    return {
        [sides.BLUE]: { name: 'BLUE', picks: [], bans: [] },
        [sides.RED]: { name: 'RED', picks: [], bans: [] }
    }
}

export { newTeams };
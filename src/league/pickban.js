import { nullArrayOfSize } from '../util/arrays';
import { NUM_BANS_TOTAL, NUM_PICKS_TOTAL } from '../util/constants';

export const sides = {
    BLUE: 'blue',
    RED: 'red'
}

export const phases = {
    PICK: 'pick',
    BAN: 'ban'
}

export const phaseOrder = [
    // Ban Phase 1
    { phase: phases.BAN, side: sides.BLUE },
    { phase: phases.BAN, side: sides.RED },
    { phase: phases.BAN, side: sides.BLUE },
    { phase: phases.BAN, side: sides.RED },
    { phase: phases.BAN, side: sides.BLUE },
    { phase: phases.BAN, side: sides.RED },
    // Pick Phase 1
    { phase: phases.PICK, side: sides.BLUE },
    { phase: phases.PICK, side: sides.RED },
    { phase: phases.PICK, side: sides.RED },
    { phase: phases.PICK, side: sides.BLUE },
    { phase: phases.PICK, side: sides.BLUE },
    { phase: phases.PICK, side: sides.RED },
    // Ban Phase 2
    { phase: phases.BAN, side: sides.RED },
    { phase: phases.BAN, side: sides.BLUE },
    { phase: phases.BAN, side: sides.RED },
    { phase: phases.BAN, side: sides.BLUE },
    // Pick Phase 2
    { phase: phases.PICK, side: sides.RED },
    { phase: phases.PICK, side: sides.BLUE },
    { phase: phases.PICK, side: sides.BLUE },
    { phase: phases.PICK, side: sides.RED }
];

export function createNewTeams() {
    return {
        [sides.BLUE]: { name: 'BLUE', picks: nullArrayOfSize(NUM_PICKS_TOTAL), bans: nullArrayOfSize(NUM_BANS_TOTAL) },
        [sides.RED]: { name: 'RED', picks: nullArrayOfSize(NUM_PICKS_TOTAL), bans: nullArrayOfSize(NUM_BANS_TOTAL) }
    }
}

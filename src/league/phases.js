const sides = {
    BLUE: 'blue',
    RED: 'red'
}

const phases = {
    PICK: 'pick',
    BAN: 'ban'
}

const phaseOrder = [
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

export { sides, phases, phaseOrder };
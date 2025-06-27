const solution = (participant, completion) => {
    const participantMap = new Map();
    
    for(const name of participant) {
        participantMap.set(name, (participantMap.get(name) ?? 0) + 1);
    }
    
    for(const name of completion) {
        if(participantMap.get(name)) {
            participantMap.set(name, participantMap.get(name) - 1);
        } else {
            return name;
        }
    }
    
    for(const [name, count] of [...participantMap]) {
        if(count !== 0) {
            return name;      
        }
    }
}
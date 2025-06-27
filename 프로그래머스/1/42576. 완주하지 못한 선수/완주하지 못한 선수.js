const solution = (participant, completion) => {
    const participantMap = new Map();
    
    for(const name of participant) {
        const value = participantMap.get(name);
        
        participantMap.set(name, (value ?? 0) + 1);
    }
    
    for(const name of completion) {
        const value = participantMap.get(name);
        
        if(value) {
            participantMap.set(name, value - 1);
        } else {
            return name;
        }
    }
    
    for(const [name, count] of participantMap) {
        if(count !== 0) {
            return name;      
        }
    }
}
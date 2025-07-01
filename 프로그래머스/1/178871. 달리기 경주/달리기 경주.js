const solution = (players, callings) => {
    const map = new Map(players.map((name, i) => [i + 1, name]));
    const obj = Object.fromEntries(players.map((name, i) => [name, i + 1]));
    
    
    for(const name of callings) {
        const front = map.get(obj[name] - 1);
        
        map.set(obj[name] - 1, name);
        map.set(obj[name], front);
        
        obj[front] = obj[front] + 1;
        obj[name] = obj[name] - 1;
    }
    
    
    return [...map.values()];
}

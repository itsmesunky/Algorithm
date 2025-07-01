const solution = (players, callings) => {
    // 이름 : 등수 - 1
    const obj = Object.fromEntries(players.map((name, i) => [name, i]));
    
    for(const name of callings) {
        const idx = obj[name];
        const prev = players[idx - 1];
        
        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
        
        obj[name]--;
        obj[prev]++;
    }
    
    return players;
}

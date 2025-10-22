const solution = (routes) => {
    let answer = 1;
    
    routes.sort((a, b) => (a[1] - b[1]));
    
    let lastValue = routes[0][1];
    
    for(let i = 1; i < routes.length; i++) {
        if(lastValue < routes[i][0]) {
            answer++;
            lastValue = routes[i][1];
        }
    }
    
    return answer;
}
const solution = (progresses, speeds) => {
    const answer = [];
    
    while(progresses.length) {
        let count = 0;
        const diff = 100 - progresses[0];
        const day = Math.ceil(diff / speeds[0]);
        
        for(let i = 0; i < progresses.length; i++) {
            if(progresses[i] < 100) {
                progresses[i] += day * speeds[i];
            }
        }
        
        while(true) {
            if(progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                count++;
            } else {
                break;
            }
            
            if(!progresses.length) break;
        }
        
        answer.push(count);
    }
    
    return answer;
}
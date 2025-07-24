const solution = (progresses, speeds) => {
    const answer = [];
    
    // 기능별 남은 일수
    const remainDays = progresses.map((v, i) => {
        const remain = 100 - v;
        const days = Math.ceil(remain / speeds[i]);
        
        return days;
    })
    
    // 작업을 가리킬 인덱스
    let i = 0;
    
    while(i < remainDays.length) {
        let deployCount = 0;
        const currentDay = remainDays[i];
        
        while(i < remainDays.length && currentDay >= remainDays[i]) {
            i++;
            deployCount++;
        }
        
        answer.push(deployCount);
    }
    
    return answer;
};
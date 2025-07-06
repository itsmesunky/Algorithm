const solution = (id_list, report, k) => {
    const users = Object.fromEntries(id_list.map(name => [name, {count: 0, reports: new Set()}]));
    
    const blacklist = new Set();
    
    const answer = [];
    
    // 유저별 신고 당한 횟수 및 신고한 유저 저장
    for(const names of report) {
        const [reporter, reported] = names.split(" ");
        
        if(!users[reporter].reports.has(reported)) {
            users[reporter].reports.add(reported);
            users[reported].count++;    
        }
        
        // K번 이상 신고 당한 유저 저장
        if(users[reported].count >= k)  {
            blacklist.add(reported);
        }
    }
    
    for(const name in users) {
        const count = [...users[name].reports].filter(v => blacklist.has(v)).length;
        
        answer.push(count);
    }
    
    return answer;
}
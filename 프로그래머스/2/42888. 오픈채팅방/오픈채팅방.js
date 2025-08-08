const solution = (record) => {
    const answer = [];
    
    // 입/퇴장 구분 메시지
    const messages = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    
    // 유저: 최근 닉네임
    const users = {};
    
    for(const rec of record) {
        const [_, id, nickname] = rec.split(" ");
        
        if(nickname) users[id] = nickname;
    }
    
    for(const rec of record) {
        const [div, id, nickname] = rec.split(" ");
        
        if(div !== 'Change') {
            answer.push(`${users[id]}${messages[div]}`);
        }
    }
    
    return answer;
}
const solution = (msg) => {
    const answer =[];
    
    // 사전
    const dict = new Map(Array.from({length: 26}, (_, i) => [String.fromCharCode(65 + i), i + 1]));
    
    // msg의 인덱스를 가리킬 변수
    let pos = 0;
    
    while(pos < msg.length) {
        let index = 0; // answer에 추가할 색인 번호
        let w = msg[pos];
        
        while(dict.get(w) && pos < msg.length) {
            index = dict.get(w);
            w += msg[++pos];
        }
        
        answer.push(index);
        dict.set(w, dict.size + 1);
    }
    
    return answer;
}
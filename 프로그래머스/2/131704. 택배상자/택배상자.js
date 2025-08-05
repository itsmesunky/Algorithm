const solution = (order) => {
    let answer = 0; // 실을 수 있는 상자의 개수
    let main = 1; // 메인 컨테이너 벨트에서 꺼낸 상자의 번호
    const sub = []; // 서브 컨테이너 벨트(Stack)
    
    for(const box of order) {
         // 메인 컨테이너 벨트에서 꺼낸 상자의 번호 <= 실어야 하는 상자의 번호
        while(main <= box) {
            sub.push(main++);
        }
        
        if(sub.length && sub.at(-1) === box) {
            sub.pop();
            answer++;
        } else {
            break;
        }
    }
    
    return answer;
}
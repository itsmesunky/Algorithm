const solution = (order) => {
    let answer = 0; // 실을 수 있는 상자의 개수
    let pos = 0; // order의 인덱스를 가리킬 변수
    let main = 1;
    let sub = []; // 보조 컨테이너 벨트
    
    while(main <= order.length) {
        let dropBox = main; // 메인 컨테이너 벨트에서 떨어지는 상자
        let orderBox = order[pos];
        
        if(dropBox === orderBox) {
            answer++;
            pos++;
            main++;
        } else if(sub.length && sub.at(-1) === orderBox) {
            sub.pop();
            answer++;
            pos++;
        } else {
            sub.push(dropBox);
            main++;
        }
    }
    
    while(pos < order.length && sub.length) {
        const box = sub.pop();
        
        if(box === order[pos]) {
            answer++;
            pos++;
        } else {
            break;
        }
    }
    
    return answer;
}
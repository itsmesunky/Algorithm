/**
* 문제 해결 시나리오
* 1. 각 상자는 어떤 상자를 선택하더라도 같은 그룹에 속하게 됨
* 2. 그룹별 상자 개수 저장 후, 상위 2개의 값을 곱하면 됨
*/
const solution = (cards) => {
    const len = cards.length;
    const groups = [];
    const visited = Array(len + 1).fill(false);
    
    for(let i = 0; i < len; i++) {
        let count = 0;
        let startCard = cards[i];
        
        while(!visited[startCard]) {
            visited[startCard] = true;
            startCard = cards[startCard - 1];
            count++;
        }
        
        groups.push(count);
    }
    
    groups.sort((a, b) => b - a);
    
    return groups.length === 1 ? 0 : groups[0] * groups[1];
}
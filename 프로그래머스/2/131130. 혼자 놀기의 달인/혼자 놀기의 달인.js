/**
* 문제 해결 시나리오
* 1. cards 각 원소에 대해 재귀 실행
* 2. 재귀 실행 중, 최대값 찾아 반환
*/
const solution = (cards) => {
    let answer = 0;
    let copiedCards = [0, ...cards];
    const len = copiedCards.length;
    
    const recursive = (idx, visited) => {
        let cnt = 0;
        let nextBox = copiedCards[idx];
        
        while(true) {
            if(!visited[nextBox]) {
                visited[nextBox] = true;
                nextBox = copiedCards[nextBox];
                cnt++;
            } else {
                break;
            }
        }
        
        return cnt;
    }
    
    for(let idx = 1; idx < len; idx++) {
        const visited = Array.from({length: len + 1}, (_, i) => i === 0);
        visited[idx] = true;
        
        // 1번 상자 그룹에 속한 상자의 수
        const firstGroupCount = recursive(idx, visited) + 1;
        
        const i = visited.findIndex(v => !v);
        
        let secondGroupCount = 0;
        for(let j = i; j < len; j++) {
            secondGroupCount = Math.max(secondGroupCount, recursive(j, [...visited]));
        }
        
        answer = Math.max(answer, firstGroupCount * secondGroupCount);
    }
    
    return answer;
}
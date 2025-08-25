/**
* makeCombine: 특정 문자열과 자연수가 주어지면 자연수의 길이만큼 문자열을 조합해서 만들어주는 헬퍼 함수(DFS)
* @param(str): 특정 문자열
* @param(n): 자연수
*/
const makeCombine = (str, n) => {
    const combines = [];
    
    // 특정 인덱스 방문 여부 저장
    const visited = Array(str.length).fill(false);
    
    const dfs = (idx, combineStr) => {
        // 1. 탈출 조건
        if(combineStr.length === n) {
            combines.push(combineStr);
            return;
        }
        
        // 2. 수행 동작
        for(let i = idx; i < str.length; i++) {
            if(!visited[i]) {
                // 2.1 방문 처리
                visited[i] = true;
                dfs(i + 1, combineStr + str[i]);
                // 2.2 백트래킹
                visited[i] = false;
            }
        }
    }
    
    dfs(0, '');
    
    return combines;
}


const solution = (orders, course) => {
    const answer = [];
    
    // 0. 조합 메뉴 : 주문 수
    const combineCount = [];
    
    // 1. orders 각 문자열 오름차순 정렬
    const ordered = orders.map(order => [...order].sort().join(''));
    
    // 2. course 순회하면서 만들 수 있는 조합 만들기
    for(const num of course) {
        // 3. 주문별 조합 주문 횟수 저장
        for(const order of ordered) {
            const combines = makeCombine(order, num);
            for(const combine of combines) {
                const idx = combineCount.findIndex(([v, _]) => v === combine);
                
                if(idx === -1) {
                    combineCount.push([combine, 1]);
                } else {
                    combineCount[idx][1] = combineCount[idx][1] + 1;
                }
            }
        }
    }
    
    // 4.
    for(const num of course) {
        // 메뉴 조합별 최대 주문 수
        const combines = combineCount.filter(([combine, count]) => combine.length === num && count >= 2);
        const max = Math.max(...combines.map(([_, count]) => count));
        
        answer.push(...combines.filter(([_, c]) => c === max).map(([combine, _]) => combine));
    }
    
    return answer.sort();
    
}
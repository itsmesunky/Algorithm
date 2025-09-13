/**
* 문제 해결 시나리오
* 1. 1부터 n까지의 수 중, 5개의 숫자를 골라 조합을 생성
* 2. 각 조합들에 대해 q를 순회하며 일치하는 수가 ans와 모두 같다면 count 증가
*/

const solution = (n, q, ans) => {
    let answer = 0;
    
    // 숫자 5개 조합 생성
    const getCombine = (arr, idx) => {
        // 숫자 5개가 되었을 때
        if(arr.length === 5) {
            for(let row = 0; row < q.length; row++) {
                const len = q[row].filter(v => arr.includes(v))?.length;
                if(len !== ans[row]) return;
            }
            
            answer++;
            return;
        }
        
        for(let i = idx + 1; i <= n; i++) {
            arr.push(i);
            getCombine(arr, i);
            arr.pop();
        }
    }
    
    getCombine([], 0);
    
    return answer;
}
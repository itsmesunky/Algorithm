/**
* 문제 해결 시나리오
* 1. 현재 단어에서 변경이 가능한 단어 탐색
* → 즉, 현재 단어와 다음 단어간 다른 알파벳의 개수가 1개인 경우
* 2. 해당 단어를 큐에 삽입 후 1번 과정 반복
*/
const solution = (begin, target, words) => {
    /**
    * isDiffCountOne: 두 단어 사이간 다른 알파벳의 개수가 1개인지 판별해주는 헬퍼 함수
    * @param {string} a - 첫 번째 단어
    * @param {string} b - 두 번째 단어
    * @returns {boolean} - 다른 알파벳의 개수가 1개인 경우 true, 그렇지 않으면 false
    */
    const isDiffCountOne = (a, b) => {
        let count = 0;
        
        for(let i = 0; i < a.length; i++) {
            if(count > 1) return false;
            if(a[i] !== b[i]) count++;
        }
        
        return count > 1 ? false : true;
    }
    
    // BFS로 인접 단어 탐색
    const bfs = (begin) => {
        const visited = new Map(words.map(word => [word, false]));
        const queue = [[begin, 0]];
        visited.set(begin, true);
        
        while(queue.length) {
            const [currWord, count] = queue.shift();
            
            if(currWord === target) {
                return count;
            }
            
            for(let i = 0; i < words.length; i++) {
                const nextWord = words[i];
                
                if(!visited.get(nextWord) && isDiffCountOne(currWord, nextWord)) {
                    visited.set(nextWord, true);
                    queue.push([nextWord, count + 1]);
                }
            }
        }
        
        return 0;
    }
    
    return bfs(begin);
}


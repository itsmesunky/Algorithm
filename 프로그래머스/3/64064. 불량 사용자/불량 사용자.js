/**
* 문제 해결 시나리오
* 1. banned_id를 순회하며 각 id의 패턴과 일치하는 아이디를 user_id에서 찾아서 인덱스로 저장한다.
* 예. user_id = ["frodo", "fradi", crodo"], banned_id[i] = "*r*d*"
* → matched[i] = [0, 2]
* 2. 각 id별로 저장된 2차원 배열을 DFS 탐색 + 비트 마스크를 활용해 중복 조합 검사를 실시한다.
* 3. 비트 마스크로 생성한 조합을 Set에 추가한다.
* 4. 중복 제거된 Set의 길이를 반환한다.
*/
const solution = (user_id, banned_id) => {
    
    /**
    * isMatched: 특정 아이디가 특정 패턴과 일치하는지 여부를 검사하는 헬퍼 함수
    * @param {string} id - 특정 패턴 일치 여부 검사할 id
    * @param {string} pattern - 특정 패턴
    * @returns {boolean} - 아이디와 패턴이 일치하면 ture, 그렇지 않으면 false를 반환
    */
    const isMatched = (id, pattern) => {
        // 길이 검사
        if(id.length !== pattern.length) return false;
        
        for(let i = 0; i < id.length; i++) {
            if(pattern[i] === '*') continue;
            if(id[i] !== pattern[i]) return false;
        }
        
        return true;
    }
    
    // banned_id의 각 id별로 일치하는 user_id의 인덱스를 저장
    const matched = banned_id.map(pattern => {
        const arr = [];
        
        user_id.forEach((userId, i) => {
            if(isMatched(userId, pattern)) {
                arr.push(i);
            }
        })
        
        return arr;
    });
    
    // 비트 마스크로 생성된 조합(예. 9 → '1001')을 중복 없이 저장
    const set = new Set();
    const banLen = banned_id.length;
    
    const dfs = (banIdx, currentMask) => {
        if(banIdx === banLen) {
            set.add(currentMask);
            return;
        }
        
        for(const userIdx of matched[banIdx]) {
            if((currentMask & (1 << userIdx)) === 0) { // 현재 조합에 포함되지 않은 인덱스라면
                dfs(banIdx + 1, currentMask | (1 << userIdx));
            }
        }
    }
    
    dfs(0, 0);
    
    return set.size;
}
const solution = (begin, target, words) => {
    // 두 문자열 사이 다른 문자의 갯수가 1인지 판단해주는 헬퍼 함수
    const isDiffCountOne = (str1, str2) => {
        let count = 0;
        
        const arr1 = [...str1].sort((a, b) => a - b);
        const arr2 = [...str2].sort((a, b) => a - b);
        
        for(let i = 0; i < arr1.length; i++) {
            if(count > 1) return false;
            if(arr1[i] !== arr2[i]) count++;
        }
        
        return count > 1 ? false : true;
    }
    
    const BFS = (currStr, count) => {
        // 특정 문자열 방문 여부 저장 Map
        const visited = new Map(words.map(word => [word, false]));
        const queue = [];
        queue.push([currStr, count]);
        
        while(queue.length) {
            const [str, cnt] = queue.shift();
            
            if(str === target) {
                return cnt;
            }
            
            for(let i = 0; i < words.length; i++) {
                const nextString = words[i];
                if(!visited.get(nextString) && isDiffCountOne(str, nextString)) {
                    visited.set(nextString, true);
                    queue.push([nextString, cnt + 1]);
                }
            }
        }
        
        return 0;
    }
    
    return BFS(begin, 0);
}
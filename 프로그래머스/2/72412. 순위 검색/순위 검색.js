const doSeparate = (str) => {
    const [lang, position, carrer, food, score] = str.split(' ');
    return [`${lang} ${position} ${carrer} ${food}`, +score];
}

const binarySearch = (arr, num) => {
    let lt = 0;
    let rt = arr.length;
    
    while(lt < rt) {
        const mid = Math.floor((lt + rt) / 2);
        const value = arr[mid];
        if(value >= num) {
            rt = mid;
        } else {
            lt = mid + 1;
        }
    }
    
    return lt;
}

const solution = (infos, queries) => {
    // key: 선택 항목 조합, value: [점수] 형태의 Map
    const map = new Map();
    
    const doCombineAndSet = (arr, score) => {
        // 비트 마스크를 활용한 조합 생성
        for(let i = 0; i < 1 << 4; i++) {
            const combine = [];
            for(let j = 0; j < 4; j++) {
                if(i & (1 << j)) {
                    combine.push(arr[j]);
                } else {
                    combine.push('-');
                }
            }
            
            const key = combine.join(' ');
            
            if(map.get(key)) {
                map.get(key).push(score);
            } else {
                map.set(key, [score]);
            }
        }
    }
    
    for(const info of infos) {
        const [str, score] = doSeparate(info);
        doCombineAndSet(str.split(' '), score);
    }
    
    // 이분 탐색을 위한 각 조합별 점수 오름차순 정렬
    for(const [key, value] of map) {
        value.sort((a, b) => a - b);
    }
    
    return queries.map(query => {
        const [str, score] = doSeparate(query.replaceAll(' and ', ' '));
        const scores = map.get(str);
        
        return !scores ? 0 : scores.length - binarySearch(scores, score);
    })
}
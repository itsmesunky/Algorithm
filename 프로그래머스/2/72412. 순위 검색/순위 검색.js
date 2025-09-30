/**
* 문제 해결 시나리오
* 1. info와 query 배열을 ["문자열", 점수] 형식으로 재가공
* 2. info와 query를 점수 오름차순 정렬
* 3. query를 순회하며 해당 점수 시작 인덱스 찾기
* 4. 해당 인덱스부터 문자열이 같은 원소의 개수를 세기
*/

/**
* getSeparte: 문자열이 주어지면 해당 문자열을 ["문자열", 점수]로 분리해주는 함수
* @param {string} str: "문자열 + 숫자" 형태의 문자열
*/
const getSeparate = (str) => {
    const matched = str.replaceAll(/-|and/g, matcher => '').match(/([a-z ]+)?([0-9]+)/);
    return [matched[1], +matched[2]];
}

const solution = (info, query) => {
    const I = info.map(str => getSeparate(str)).sort((a, b) => a[1] - b[1]);
    const Q = query.map(str => {
        const separate = getSeparate(str);
        return [separate[0].split(' ').filter(v => v), separate[1]];
    });
    
    return Q.map(query => {
        let count = 0;
        
        const [queryStr, queryScore] = [query[0], query[1]];
        
        // 이분 탐색을 위한 변수 정의
        let left = 0;
        let right = info.length - 1;
        let mid = 0;
        let min = Number.MAX_SAFE_INTEGER;
        
        while(left < right) {
            mid = Math.floor((left + right) / 2);
            
            if(I[mid][1] < queryScore) {
                left = mid + 1;
            } else if(min < I[mid][1] && I[mid][1] > queryScore) {
                right = mid - 1;
                min = Math.min(I[mid][1], min);
            } else {
                break;
            }
        }
        
        for(let i = mid; i < I.length; i++) {
            if(queryStr.every(str => I[i][0].includes(str))) {
                count++;
            }
        }
        
        return count;
    })
}

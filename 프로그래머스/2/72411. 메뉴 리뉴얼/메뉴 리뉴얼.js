/**
* makeCombine: 특정 문자열과 자연수가 주어지면 자연수의 길이만큼 문자열을 조합해서 만들어주는 헬퍼 함수
* @param(str): 특정 문자열
* @param(n): 자연수
*/
const makeCombine = (str, n) => {
    const combines = [];
    const make = (idx, combineStr) => {
        if (combineStr.length === n) {
            combines.push(combineStr);
            return;
        }
        for (let i = idx; i < str.length; i++) {
            make(i + 1, combineStr + str[i]);
        }
    };
    make(0, '');
    return combines;
};

const solution = (orders, course) => {
    const answer = [];
    const courseMap = new Map();

    // 1. 모든 주문을 알파벳 순으로 정렬합니다.
    const ordered = orders.map(order => [...order].sort().join(''));

    // 2. 각 주문에서 가능한 모든 조합을 생성하고 Map에 횟수를 기록합니다.
    for (const order of ordered) {
        for (const num of course) {
            // 주문 길이가 num보다 작으면 조합을 만들 수 없으므로 건너뜁니다.
            if (order.length < num) continue;
            
            const combines = makeCombine(order, num);
            for (const combine of combines) {
                courseMap.set(combine, (courseMap.get(combine) || 0) + 1);
            }
        }
    }

    // 3. course 길이에 따라 최대 횟수를 가진 조합을 찾아 정답 배열에 추가합니다.
    for (const num of course) {
        let maxCount = 0;
        const candidates = [];

        for (const [key, value] of courseMap.entries()) {
            if (key.length === num && value >= 2) {
                if (value > maxCount) {
                    maxCount = value;
                    candidates.length = 0; // 더 큰 값 발견 시 이전 후보 초기화
                    candidates.push(key);
                } else if (value === maxCount) {
                    candidates.push(key);
                }
            }
        }
        answer.push(...candidates);
    }
    
    return answer.sort();
};
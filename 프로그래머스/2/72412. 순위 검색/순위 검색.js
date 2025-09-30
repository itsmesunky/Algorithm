function solution(info, query) {
    const data = new Map();

    // 1. info를 파싱하여 모든 경우의 수(16가지 조합)를 Map에 저장
    function makeData(arr, score, index) {
        // 4개의 정보 항목을 모두 처리한 경우, Map에 점수를 저장
        if (index === 4) {
            const key = arr.join('');
            if (data.has(key)) {
                data.get(key).push(score);
            } else {
                data.set(key, [score]);
            }
            return;
        }

        // 현재 항목을 그대로 사용하는 경우
        makeData(arr, score, index + 1);

        // 현재 항목을 '-'로 대체하는 경우
        let temp = [...arr]; // 배열 복사
        temp[index] = '-';
        makeData(temp, score, index + 1);
    }

    info.forEach(s => {
        const arr = s.split(' ');
        const score = Number(arr.pop()); // 마지막 항목은 점수
        makeData(arr, score, 0); // 16가지 조합을 만들어 Map에 저장
    });

    // 2. 이분 탐색을 위해 Map의 모든 점수 배열을 오름차순 정렬
    for (const [key, arr] of data.entries()) {
        arr.sort((a, b) => a - b);
    }

    // 3. 쿼리 처리
    const answer = [];
    query.forEach(q => {
        // 쿼리 파싱: 'and'와 '-'를 제거한 후 마지막은 점수
        const arr = q.replace(/and/g, '').split(' ').filter(v => v !== '');
        const score = Number(arr.pop()); // 마지막 항목은 점수
        const key = arr.join(''); // 검색 키

        if (data.has(key)) {
            const scores = data.get(key);
            // 이분 탐색: qScore 이상의 점수가 처음 나타나는 인덱스(Lower Bound) 찾기
            let low = 0;
            let high = scores.length; // high를 배열의 길이로 설정
            let mid;

            while (low < high) {
                mid = Math.floor((low + high) / 2);
                if (scores[mid] >= score) {
                    high = mid;
                } else {
                    low = mid + 1;
                }
            }
            // high가 qScore 이상인 점수가 처음 나타나는 인덱스
            // scores.length - high가 조건을 만족하는 지원자의 수
            answer.push(scores.length - high);
        } else {
            // 해당 조건 조합이 Map에 없으면 0명
            answer.push(0);
        }
    });

    return answer;
}
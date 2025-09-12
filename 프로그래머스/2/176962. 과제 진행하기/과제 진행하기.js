/**
* 문제 해결 시나리오
* 1. plans 시작 시간 오름차순 정렬
* 2. 각 과제의 시작 시간을 분 단위로 변환
* 3. 과제를 시작할 때마다 다음 과제 시작 시간 확인
* 4. 현 과제를 끝내고 다음 과제 시작 전까지 여유가 있으면 최근 멈춘 과제 시작
*/

/**
* covertToMinute: 'HH:MM' 형식의 문자열을 분단위로 변환해주는 함수
* @param(times): 'HH:MM' 형식의 문자열
*/
const convertToMinute = (times) => {
    const [H, M] = times.split(':').map(Number);
    return H * 60 + M;
}

const solution = (plans) => {
    const answer = [];

    // 남은 과제 저장
    const queue = [...plans].map(([name, start, playtime]) => [name, convertToMinute(start), +playtime])
                            .sort((a, b) => a[1] - b[1]);
    // 멈춘 과제 저장
    const stack = [];
    
    while(queue.length >= 2) {
        const [currS, currT, currR] = queue.shift();
        const [nextS, nextT, nextR] = queue[0];

        // 현재 과제 종료 시간과 다음 과제 시작 시간 차이 계산
        let remainT = nextT - (currT + currR);

        if(remainT > 0) { // 남는 시간이 있을 때
           answer.push(currS);

            // 다음 과제 시작 전까지 멈춘 과제 진행
            while(stack.length && remainT > 0) {
                let [prevS, prevT, prevR] = stack.at(-1);

                // 현재 남은 시간
                let currRemain = remainT;
                remainT -= prevR;
                prevR -= currRemain;

                if(prevR <= 0) {
                    stack.pop();
                    answer.push(prevS);
                } else {
                    stack.at(-1)[2] -= currRemain;
                }
            }
        } else if(remainT < 0) { // 시간이 모자랄 때 멈춘 과제 배열로 이동
            stack.push([currS, currT, currR - (nextT - currT)]);
        } else {
            answer.push(currS);
        }
    }
    
    while(queue.length) {
        const [currS, currT, currR] = queue.shift();
        answer.push(currS);
    }
    
    while(stack.length) {
        const [prevS, prevT, prevR] = stack.pop();
        answer.push(prevS);
    }
    
    return answer;
}
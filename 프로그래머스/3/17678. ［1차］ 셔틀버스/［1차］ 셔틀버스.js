/**
* 문제 해결 시나리오
* 1. 막차를 마지막으로 타야 제일 늦게 도착할 수 있음
* 2. 셔틀 도착 시간을 분 단위로 저장
* 3. timetable도 분 단위로 변환하여 저장 후 오름차순 정렬
* 4. 셔틀 막차 시간 이후 도착 크루는 제외
* 5.1 막차를 남은 인원이 모두 탈 수 있다면 해당 막차 시간 반환
* 5.2 아니라면 마지막으로 탈 수 있는 사람보다 1분 일찍 도착
*/

/**
* convertToMinute: 'HH:MM' 형식의 문자열을 전달받아 분 단위로 변환해주는 함수
* @param {string} str - 'HH:MM' 형식의 문자열
* @returns number - 분 단위 숫자
*/
const convertToMinute = (str) => {
    const [hour, minute] = str.split(":").map(Number);
    return hour * 60 + minute;
}

/**
* converToHHMM: 분 단위 숫자를 'HH:MM' 형식의 문자열로 변환해주는 함수
* @param {number} num - 분 단위 숫자
* @returns string - 'HH:MM' 형식의 문자열
*/
const convertToHHMM = (num) => {
    const hour = String(Math.floor(num / 60)).padStart(2, '0');
    const minute = String(num % 60).padStart(2, '0');
    
    return `${hour}:${minute}`;
}
    
const solution = (n, t, m, timetable) => {
    let answer = "";
    
    // 셔틀 첫 출발 시간
    let startTime = convertToMinute("09:00");
    
    // 셔틀 도착 시간 구하기
    const arriveTimes = [];
    for(let i = 0; i < n; i++){
        arriveTimes.push(startTime + (t * i));
    }
    
    const len = arriveTimes.length;
    const lastTime = arriveTimes.at(-1);
    
    // 막차 시간 이후 대기 인원 제외 대기열
    const pq = timetable.map(time => convertToMinute(time))
                        .sort((a, b) => a - b)
                        .filter(time => time <= lastTime);
    
    let pointer = 0;
    
    arriveTimes.forEach((time, i) => {
        // 막차인 경우
        if(i === len - 1) {
            const rest = pq.length - pointer; // 남은 인원
            if(m <= rest) {
                const last = pq[pointer + m - 1]; // 마지막 인원 도착 시간
                answer = convertToHHMM(last - 1); // 마지막 인원 도착 시간보다 1분 일찍 도착
            } else {
                answer = convertToHHMM(time);
            }
        } else {
            let sum = 0;
            while(sum < m) {
                if(pq[pointer] <= time) {
                    pointer++;
                    sum++;
                } else {
                    break;
                }
            }
        }
    });
    
    return answer;
}